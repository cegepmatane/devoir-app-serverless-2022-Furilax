console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const querystring = require('querystring');

exports.handler = async (event) => {
  const postdata = querystring.parse(event.body);
  
  let ecouteur = null;
  let ecouteurjson = postdata["ecouteurjson"];
  if(ecouteurjson){
    ecouteur = JSON.parse(ecouteurjson);
  }
  
  let response = {
    statusCode: 400,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    body : "Pas de ecouteur reçu",
  };
  
  if (ecouteur == null) {
    return response;
  }

  ecouteur.id = Date.now();

  const params = {
      Bucket: "app-serverless-nicolas",
      Key: "liste-ecouteur.json",
  };

  let data = await s3.getObject(params).promise();
  let listeEcouteurJson = data.Body.toString('utf-8');
  const listeEcouteur = JSON.parse(listeEcouteurJson);
  listeEcouteur.push(ecouteur);
  listeEcouteurJson = JSON.stringify(listeEcouteur);
  params.Body  = listeEcouteurJson;
  data = await s3.putObject(params).promise();

  response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: ecouteur.id
  };

  return response;
};