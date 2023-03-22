## ES6 PROMISE

File | Description
---- | -----------
[0-promise.js](./0-promise.js) | Script that returns a Promise using prototype 'function getResponseFromAPI()
[1-promise.js](./1-promise.js) | Script that returns a promise whose parameter is boolean using prototype **getFullResponseFromAPI(success)**. </br> When argument is true, resolve promiser by passin an object with two attributes: <br> ~ status: 200 <br> ~ body: **Success** <br> When argument is false, rejects the promise with an error object with message 'The fake API is not working currently'
[2-then.js](./2-the.js) | Script that appends three handlers to function using function prototype function **handleResponseFromAPI(promise)**: <br> * When the promise resolves, returns an object with the following attributes: <br> ~ status: 200 <br> ~ bosy: success <br> * When the promise rejects, returns an empty Error object. <br> * For every resolution, logs **got a response from the API** to the console.
[
