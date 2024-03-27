A Callback in Node.js is an asynchronous equivalent for a function. It is a special type of function passed as an argument to another function. Node.js makes heavy use of callbacks. Callbacks help us make asynchronous calls. All the APIs of Node are written in such a way that they support callbacks.

The callback is called when the function that contains the callback as an argument completes its execution, and allows the code in the callback to run in the meantime. This makes Node.js highly scalable, as it can process a high number of requests without waiting for any function to return results.

Syntax:
    
    function function_name(argument, function (callback_argument){
       // callback body 
    })


## How to write a callback as an arrow function
It may be confusing to have multiple function keywords in a block of code. To eliminate the function keyword in the callback, you can use an arrow function. The arrow function was introduced in ES6 and helps you write cleaner code by removing the function keyword.


You can also assign an arrow function as a callback argument. Arrow function in JavaScript is an anonymous function. It is also called as lambda function. The syntax of using arrow function as Node.js callback is as follows

        function function_name(argument, (callback_argument) => { 
           // callback body 
        })

        // Define a function that takes an argument and a callback function
        function processInput(input, callback) {
        console.log("Processing input:", input);
        
        // Simulate some asynchronous operation
        setTimeout(() => {
            const processedData = input.toUpperCase();
            callback(processedData); // Call the callback function with the processed data
        }, 1000);
        }
    
        // Define a callback function to be passed to processInput
        const displayResult = (result) => {
        console.log("Processed result:", result);
        };
    
        // Call the function processInput with an argument and the callback function
        processInput("hello", displayResult);
