// service.js
var AssistantV1 = require('ibm-watson/assistant/v1');

//Add access tokens for watson assistant
var assistant = new AssistantV1({
  iam_apikey: 'FUMVSzy5Q0vggYjL8o-avZVagOOlLQdiCtPg7wqbKXDx',
  url: 'https://gateway.watsonplatform.net/assistant/api/',
  version: '2019-09-13'
});

exports.getMessage = body =>
  new Promise((resolve, reject) => {
    assistant.message(
      {
        workspace_id: 'a7226940-72e5-411c-8586-d8f502a06f8a',
        input: { text: body.input }
      },
      function(err, response) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(response);
        }
      }
    );
  });