let response = {
    "statusCode": 200,
    "headers": {
        "Content-Type": "application/json"
    },
    "statusDescription": "OK",
    "isBase64Encoded": false,
    "body": JSON.stringify({message: 'hello world'})
}

exports.lambdaHandler = async (event, context, callback) => {
    console.log("Called lambdaHandler: helloworld")
    // console.log("Context: ", JSON.stringify(context))
    console.log("Event: ", JSON.stringify(event))
    callback(null, response);
};
