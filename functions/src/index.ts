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
      if (original) {
        const snapshot = await admin.database().ref('/messages').push({original: original});
        response.redirect(303, snapshot.ref.toString());
      } else {
        response.status(200).send("");
      }
  }
);

export const makeUppercase = functions.database.ref('/messages/{pushId}/original').onCreate(
  async (snapshot, context) => {
    const original = snapshot.val();
    const uppercase = original.toUpperCase();
    const parent = snapshot.ref.parent;
    if (parent) return parent.child('uppercase').set(uppercase);
    else return null;
  }
);