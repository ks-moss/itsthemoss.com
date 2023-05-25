// callAPI function that takes the base and exponent numbers as parameters
var callAPI = (name, email, msg) => {
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // Get Date and Time
    // Get Date and Time
    var currentDateTime = new Date();
    var options = { timeZone: 'America/Los_Angeles' };
    var pacificTime = currentDateTime.toLocaleString('en-US', options);
    var milliseconds = currentDateTime.getMilliseconds();
    var time_now = pacificTime + '.' + milliseconds;
    // using built-in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"name": name, "email": email, "msg": msg, "now": time_now });
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://s7hvprzewi.execute-api.us-west-1.amazonaws.com/main", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
}
