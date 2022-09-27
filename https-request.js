const http = require('http');                                   //our protocol
const fs = require("fs/promises")
// '/' = hello world
// '/facts' = fax

const server = http.createServer((request, response) => {   //our server works with a variable
    console.log(Object.keys(request))
    // console.log(request.statusCode)
    // console.log(request.url)
    // console.log(request.method)
    // console.log(response)
    if(request.url === '/'){                                 //if(condition/s is/are met) do the response, can be input or method to the url
    response.setHeader('Content-Type', 'application/json')  //how to set header
    response.statusCode = 200                               //how to set wanted response code
    const body = JSON.stringify({msg: 'hello world'})       //our body for the output, must be stringified first
    response.write(body);                                   //output the body as shown above
    response.end()                                          //end the output and return the value from the get
    }
    else if(request.url === '/facts'){                          //(if condition is met)
        response.setHeader('Content-Type', 'application/json')  //how to set header
        response.statusCode = 200                               //200 = successful response
        //console.log('getting the facts');
        fs.readFile('./top-secret/facts.json','utf-8')          //return this file from the given url location, the file is located there      
        .then((factsResponse) => {
            const parsedfacts = {facts: JSON.parse(factsResponse)}  //parsing to start the send process as an JSON object as we have asked for in the header
            response.write(JSON.stringify(parsedfacts))             //stringifying the parse to change the same unaltered physical object into type string so it can be sent
            //console.log(factsResponse)
            response.end();                                     //ending the response
        })
        .catch(() => {
            console.log("something went wrong")                 //catching errors
        })
    }
})

server.listen(9090, (error) => {                                //listening code
    if(error){
        console.log(error);
    }
    else{
        console.log('listening on port 9090');
    }
})