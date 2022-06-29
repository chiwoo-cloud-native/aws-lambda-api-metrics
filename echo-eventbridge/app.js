exports.lambdaHandler = async (event, context) => {

    console.log("Scheduled Lambda was called")
    console.log("Context: ", JSON.stringify(context))
    console.log("Event: ", JSON.stringify(event))

    return {
        'statusCode': 200,
        'body': JSON.stringify({message: 'OK'})
    }

};
