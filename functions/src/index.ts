import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://yunagilab.firebaseio.com"
});

export const helloWorld = functions.https.onRequest(
    async(request, response) => {
        const original = request.query.text;
        const snapshot = await admin.database().ref('/messages').push({original: original});
        response.redirect(303, snapshot.ref.toString());
    }
);
