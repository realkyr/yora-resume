const functions = require("firebase-functions");
const axios = require("axios");
const line = require("./config/line.json")
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.notifyInLine = functions.firestore
    .document("emails/{eid}")
    .onWrite((change, context) => {
      const params = new URLSearchParams();
      const data = change.after.data();
      params.append("message",
          data.message + "\n\n" + data.email + "\n" + data.name
      );
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Bearer " + line.token,
        },
      };

      const url = "https://notify-api.line.me/api/notify";
      axios
          .post(url, params, config)
          .then((result) => {
            // Do somthing
            console.log("notify complete");
          })
          .catch((err) => {
            // Do somthing
            console.error("notify error");
            console.error(err);
          });
    });
