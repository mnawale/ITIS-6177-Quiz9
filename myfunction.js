exports.handler = async (event) => {
    
    var keyword = event.queryStringParameters.keyword
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Megha Nawale says '+keyword)
    };
    return response;
};
