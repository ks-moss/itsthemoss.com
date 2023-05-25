// callAPI function that takes the base and exponent numbers as parameters
var callAPI = (name, email, msg) => {
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    
    // Get Date and Time
    // Create a new Date object with the current time
    var currentDate = new Date();
    // Get the year, month, and day
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // Adding 1 because the month is zero-based
    var day = currentDate.getDate();
    // Get the hours, minutes, seconds, and milliseconds in Pacific Time
    var ptOffset = -7; // Pacific Time offset from UTC (currently -7 for PDT, -8 for PST)
    var ptHours = currentDate.getUTCHours() + ptOffset;
    var hours = ptHours < 0 ? ptHours + 24 : ptHours; // Handling negative hours by wrapping around to the previous day
    var minutes = currentDate.getUTCMinutes();
    var seconds = currentDate.getUTCSeconds();
    var milliseconds = currentDate.getUTCMilliseconds();
    // Formatting single-digit values with leading zeros
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    // Create the formatted date and time string
    var dateTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds + '.' + milliseconds;

    // using built-in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"name": name, "email": email, "msg": msg, "now": dateTime});
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