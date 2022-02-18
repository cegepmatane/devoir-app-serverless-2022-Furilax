console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

exports.handler = async (event) => {
  const id = event.queryStringParameters && event.queryStringParameters.id;

  let response = {
    statusCode: 400,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    }, 
    body: 'Vous devez donner un id d ecouteur'
  };
  if (id == null) {
    return response;
  }

  const params = {
      Bucket: "app-serverless-nicolas",
      Key: "liste-ecouteur.json",
  };

  const data = await s3.getObject(params).promise();
  console.log("Raw text:\n" + data.Body.toString('utf-8'));
  const listeEcouteurJson = data.Body.toString('utf-8');
  const listeEcouteur = JSON.parse(listeEcouteurJson);

  let ecouteur = listeEcouteur.find(ecouteur => ecouteur.id == id);

  response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      }, 
      body: JSON.stringify(ecouteur).toString('utf-8')
  };
  
  return response;
};