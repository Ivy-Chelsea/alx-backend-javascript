## ES6 PROMISE

File | Description
---- | -----------
[0-promise.js](./0-promise.js) | Script that returns a Promise using prototype 'function getResponseFromAPI()
[1-promise.js](./1-promise.js) | Script that returns a promise whose parameter is boolean using prototype **getFullResponseFromAPI(success)**. </br> When argument is true, resolve promiser by passin an object with two attributes: <br> ~ status: 200 <br> ~ body: **Success** <br> When argument is false, rejects the promise with an error object with message 'The fake API is not working currently'
[2-then.js](./2-the.js) | Script that appends three handlers to function using function prototype function **handleResponseFromAPI(promise)**: <br> * When the promise resolves, returns an object with the following attributes: <br> ~ status: 200 <br> ~ bosy: success <br> * When the promise rejects, returns an empty Error object. <br> * For every resolution, logs **got a response from the API** to the console.
[3-all.js](./3-all.js) | Script that imports ***uploadPhoto*** and ***createUser*** from ***utils.js***. <br> utils.js returns promises, so function ***handleProfileSignup()*** is used to collectively resolve all promises and log ***body, firstName, lastName*** to the console.
[4-user-promise.js](./4-user-promise.js) | Script that returns a resolved promise usig objects firstName and lastName.
[5-photo-reject.js](./5-photo-reject.js) | Script that writes and export a function ***uploadPhoto*** that accepts one argument ***fileName(string)*** and returns a promise rejecting with an Error and the string ***$fileName cannnot be processed***.
[6-final-user.js](./6-final-user.js) | Script that imports ***signUpUser*** from 4-user-promise.js and ***uploadPhoto*** from 5-photo-reject.js
[7-load_balancer.js](./7-load_balancer.js) | Script that writes and exports function ***loadBalancer***, accept arguments ****chinaDownload*** and ****USDownload*** and returns value returned by the Promise that resolved the first
[8-try.js](./8-try.js) | Function ***divideFunction*** that accept arguments ***numerator*** and ***denominator***
[
