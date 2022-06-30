let response = {
    "statusCode": 200,
    "statusDescription": "OK",
    "isBase64Encoded": false,
    "headers": {
        "Content-Type": "application/json"
    },
    "body": JSON.stringify({message: 'hello world'})
}

exports.lambdaHandler = async (event, context) => {

    console.log("Called Lambda - helloworld")
    return response
};
