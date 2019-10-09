import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://yunagilab.firebaseio.com"
});

const requestModule = require('request');
const dialogflowConfig = require("../dialogflowConfig.json");

export const helloWorld = functions.https.onRequest(
  async (request, response) => {
    const query = request ? request.query : {};
    const original = query ? query.text : '';
    if (!original) {
      response.status(400).send();
      return;
    }

    await admin.database().ref('/messages').push({original: original});

    const headers = new Headers(dialogflowConfig.developerAccessToken);
    const queryJson = new QueryJson(original);
    const options = new Options(dialogflowConfig.uri, headers, queryJson);
    console.log(JSON.stringify(options));
    await requestModule.post(options.getOptions(),
      function(error :any, res :any, body :any) {
        if (error) {
          response.status(500).send(error);
          return;
        }
        if (!res || res.statusCode != 200) {
          response.status(500).send(res);
          return;
        }

        const answer = body && body.result && body.result.fulfillment && body.result.fulfillment.speech;
        response.status(200).send(answer);
      }
    );
  }
);

export const makeUppercase = functions.database.ref('/messages/{pushId}/original').onCreate(
  async (snapshot, context) => {
    const original = snapshot.val();
    const uppercase = original.toUpperCase();
    const parent = snapshot.ref.parent;
    if (!parent) return null;
    return parent.child('uppercase').set(uppercase);
  }
);

class Options {
  private uri :string;
  private headers :Headers;
  private json :QueryJson
  constructor(uri :string, headers :Headers, json :QueryJson) {
    this.uri = uri;
    this.headers = headers;
    this.json = json;
  }
  public getOptions() :object {
    return {
      'uri' :this.uri,
      'headers' :this.headers.getHeaders(),
      'json' :this.json.getJson()
    };
  }
}

class Headers {
  private contentType :string;
  private accessToken :string;
  constructor(accessToken :string, contentType :string  = 'application/json' ) {
    this.contentType = contentType;
    this.accessToken = accessToken;
  }
  private getAuthorization(accessToken :string) :string {
    return "Bearer " + accessToken;
  }
  public getHeaders() :object {
    return {
      'Content-Type' :this.contentType,
      'Authorization' :this.getAuthorization(this.accessToken)
    };
  }
}

class QueryJson {
  private query :string;
  private sessionId :string;
  constructor(query :string, sessionId :string = '12345') {
    this.query = query;
    this.sessionId = sessionId;
  }
  public getJson() :object {
    return {
      "contexts": [],
      "lang": "ja",
      "query": this.query,
      "sessionId": this.sessionId,
      "timezone": "Japan/Tokyo"
    };
  }
}