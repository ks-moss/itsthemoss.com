// callAPI function that takes the base and exponent numbers as parameters
ID = 0;
var callAPI = (name, email, msg) => {
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    
    // Get Date and Time
    var currentDateTime = new Date();
    ID++;
    // using built-in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({ "ID":ID,"name": name, "email": email, "msg": msg, "now": currentDateTime });
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://qgetwedvkg.execute-api.ca-central-1.amazonaws.com/main", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
}
