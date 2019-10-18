import * as functions from 'firebase-functions';

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
    const original = request.query.text;
    if (!original) {
      response.status(400).send();
      return;
    }

    const options = new Options(
      dialogflowConfig.uri,
      dialogflowConfig.developerAccessToken,
      original
    );
    await requestModule.post(options.getOptions(),
      async function(error :any, res :any, body :any) {
        if (error) {
          response.status(500).send(error);
          return;
        }
        if (!res || res.statusCode != 200) {
          console.log(JSON.stringify(res));
          response.status(500).send();
          return;
        }

        const answer = body.result.fulfillment.speech;
        await admin.database().ref('/messages').push({question: original, answer: answer});
        response.status(200).send(answer);
      }
    );
  }
);

class Options {
  private uri :string;
  private token :string;
  private query :string
  constructor(uri :string, token :string, query :string) {
    this.uri = uri;
    this.token = token;
    this.query = query;
  }
  public getOptions() :object {
    return {
      'uri' :this.uri,
      'headers' : {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${this.token}`
      },
      'json' : {
        "contexts": [],
        "lang": "ja",
        "query": this.query,
        "sessionId": '12345',
        "timezone": "Japan/Tokyo"
      }
    };
  }
}
