"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
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
exports.helloWorld = functions.https.onRequest((request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const query = request ? request.query : {};
    const original = query ? query.text : '';
    if (!original) {
        response.status(400).send();
        return;
    }
    yield admin.database().ref('/messages').push({ original: original });
    const headers = new Headers(dialogflowConfig.developerAccessToken);
    const queryJson = new QueryJson(original);
    const options = new Options(dialogflowConfig.uri, headers, queryJson);
    console.log(JSON.stringify(options));
    yield requestModule.post(options.getOptions(), function (error, res, body) {
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
    });
}));
exports.makeUppercase = functions.database.ref('/messages/{pushId}/original').onCreate((snapshot, context) => __awaiter(void 0, void 0, void 0, function* () {
    const original = snapshot.val();
    const uppercase = original.toUpperCase();
    const parent = snapshot.ref.parent;
    if (!parent)
        return null;
    return parent.child('uppercase').set(uppercase);
}));
class Options {
    constructor(uri, headers, json) {
        this.uri = uri;
        this.headers = headers;
        this.json = json;
    }
    getOptions() {
        return {
            'uri': this.uri,
            'headers': this.headers.getHeaders(),
            'json': this.json.getJson()
        };
    }
}
class Headers {
    constructor(accessToken, contentType = 'application/json') {
        this.contentType = contentType;
        this.accessToken = accessToken;
    }
    getAuthorization(accessToken) {
        return "Bearer " + accessToken;
    }
    getHeaders() {
        return {
            'Content-Type': this.contentType,
            'Authorization': this.getAuthorization(this.accessToken)
        };
    }
}
class QueryJson {
    constructor(query, sessionId = '12345') {
        this.query = query;
        this.sessionId = sessionId;
    }
    getJson() {
        return {
            "contexts": [],
            "lang": "ja",
            "query": this.query,
            "sessionId": this.sessionId,
            "timezone": "Japan/Tokyo"
        };
    }
}
//# sourceMappingURL=index.js.map