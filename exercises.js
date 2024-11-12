import { fileURLToPath } from "url";
import fs from "fs";
const fsPromises = fs.promises;

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  /*

    To run the code you write for each exercise, change the `exercise_01()` 
    code below to match the EXACT name
    of the exercise, as it is written in the line `function exercise_xx`.
    
     For Example:

     If I want to run exercise_05 below, 
     I would change the code below from "exercise_01()" to
     "exercise_05()", save this file. 
		 
		 Then, when I run this file by running `node exercise.js`
     in the VS Code terminal while inside this folder, your code 
     for exercise_05 will run.

  */

  // Modify the line of code BELOW to run a different exercise
  exercise_01();
  // Modify the line of code ABOVE to run a different exercise
}

function exercise_01() {
  /* 
   
    Exercise 1: Understanding Synchronous vs. Asynchronous Operations
    
    Problem:

    Explain the difference between synchronous and asynchronous operations 
    in JavaScript with examples. 
    Write a synchronous function that logs numbers from 1 to 5, and 
    an asynchronous function that does the same but 
    with a delay of 1 second between each number.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_02() {
  /* 
   
    Exercise 2: Use Cases for Asynchronous Logic
    
    Problem:

    Write an asynchronous function 'fetchData' that simulates fetching 
    data from an API using setTimeout. 
    The function should accept a callback that processes the data 
    once it's "fetched". Simulate a delay of 2 seconds.
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_03() {
  /* 
   
    Exercise 3: Working with Callbacks
    
    Problem:

    Write a function 'readFile' that simulates reading a file asynchronously. 
    It should accept a filename and a callback function. 
    If the filename is 'data.txt', it should return 'File content' after 1 second.
    Otherwise, it should return an error.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_04() {
  /* 
   
    Exercise 4: Understanding Callback Hell
    Problem:

    Demonstrate "callback hell" by writing nested callbacks to perform 
    three asynchronous tasks sequentially: 
    task1, task2, and task3, each taking 1 second to complete.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_05() {
  /* 
   
    Exercise 5: Creating and Using Promises
    
    Problem:

    Convert the 'readFile' function from Exercise 3 into a function 
    that returns a Promise instead of using callbacks.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_06() {
  /* 
    
    Exercise 6: Chaining Promises
    
    Problem:

    Create three functions task1, task2, and task3, 
    each returning a Promise that resolves after 1 second. 
    Chain these promises so that they execute sequentially.
    
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

async function exercise_07() {
  /* 
   
    Exercise 7: Error Handling in Promise Chains
    
    Problem:

    Modify task2 from Exercise 6 to reject the promise with 
    an error message 'Task 2 failed'. Handle the error in the promise chain.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

async function exercise_08() {
  /* 
   
    Exercise 8: Using .then(), .catch(), and .finally()
    
    Problem:

    Copy your code from Exercise 7 and paste it below.
    Add a .finally() block to the promise chain from Exercise 7 that 
    logs 'Process finished' regardless of success or failure.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

async function exercise_09() {
  /* 
   
    Exercise 9: Simplifying Asynchronous Code with Async/Await

    Problem:

    Copy the function definition code for task1, task2, and task3 from 
      Exercise 6 and paste it below.
    Rewrite the promise chain from Exercise 6 using async/await syntax.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

async function exercise_10() {
  /* 
   
    Exercise 10: Error Handling with Async/Await
    
    Problem:

    Copy the code from Exercise 9 and paste it below.
    But, instead of that task2 function, use the modified task2 from Exercise 7 
    (which rejects) and handle the error in your async/await promise chain.
    
    Add a `finally` block to the try-catch block that 
    logs 'Process finished' regardless of success or failure.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

async function exercise_11() {
  /* 
   
    Exercise 11: Using try-catch for Synchronous and Asynchronous Code
    
    Problem:

    Write a function that synchronously throws an error if a 
    provided number is negative. 
    Also, write an async function that fetches data and throws 
    an error if the response is not ok. Use try-catch to handle both cases.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_12() {
  /* 
   
    Exercise 12: Throwing Custom Errors
    
    Problem:

    Create a custom error class ValidationError. 
    Paste the 'checkPositiveNumber' function below and modify it to throw a 
    ValidationError when the number is negative. 
    Handle the error appropriately.
      
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_13() {
  /* 
   
    Exercise 13: Using the Callback Version of Node.js File System API
    
    Problem:

    Use the Node.js 'fs' module to read the contents of a file 
    'exercise_example.txt' using the callback-based fs.readFile method. 
    Handle errors appropriately.

    The fs module has already been imported for you at the top of this 
    exercises.js file, so you don't need to do that.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_14() {
  /* 
   
    Exercise 14: Using the Promise-Based Version of Node.js File System API

    Problem:

    Use the fs.promises API to read the contents of exercise_example.txt 
    using async/await. Handle any errors that may occur.

    NOTE - We have already imported the fs.promises library at the top
    of this exercises.js file and assigned it to the Global variable 
    `fsPromises`. Please use this variable in your code below.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

async function exercise_15() {
  /* 
   
    Exercise 15: Reading and Writing Files Asynchronously with Error Handling
    
    Problem:

    Write a function 'copyFile' that reads 'source.txt' and writes its 
    content to 'destination.txt' using promises and async/await. 
    Include proper error handling.

    NOTE - We have already imported the fs.promises library at the top
    of this exercises.js file and assigned it to the Global variable 
    `fsPromises`. Please use this variable in your code below.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_16() {
  /* 
   
    Exercise 16
    
    Fetch API: 
		
		Use the `fetch` API to make a GET request.

    Make this request to the following url:
    "https://jsonplaceholder.typicode.com/todos/1"
  
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_17() {
  const errorProneFunction = () => {
    if (Math.random() > 0.5) throw new Error("Random failure");
    console.log("Success!");
  };
  /* 
   
    Exercise 17
    
    Retry Logic: 

    Create a function named `retry` that takes a function to run and 
    the number of times it should retry it if it fails.

    Set a variable named `attempt` inside the retry function and initialize
    it to 0. Then, create a function inside the `retry` function named
    `execute`. 

    Use a try-catch block inside of `execute` to try to execute the function
    passed to `retry`. 

    Inside of the catch block, check to see if the current attempt number is 
    less than the 'retries' limit.

    If it is, increment 'attempt' by 1, log a message to the console saying you
    are retrying the function, and then run the `execute` function again.

    If attempt is greater than the retry limit, log an error to the console
    that says the function failed after the retry limit, and print the error 
    message. 

    Finally, we have defined an error prone function above 
    named `errorProneFunction`. Pass this to your `retry` function to test that
    it runs properly.

    Run this exercise multiple times to see the success and failure conditions
    your retry function should have.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_18() {
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  /* 
   
    Exercise 18
    
    Using `Promise.all`: 
		
		Make two promises run concurrently by using Promise.all.
    Once they are both finished, log their results to the console.

    We have created a Promise based `sleep` function above that takes an integer
    for the number of milliseconds to wait before resolving the promise.

    You can use it below. 1000 milliseconds equals 1 second.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_19() {
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  /* 
   
    Exercise 19
    
    Using `Promise.race`: 
		
		Using Promise.race, log the result of the first promise to out of an array
    of them.

    We have created a Promise based `sleep` function above that takes an integer
    for the number of milliseconds to wait before resolving the promise.

    You can use it below. Use 1000 milliseconds for one of the `sleep` calls
    and 2000 milliseconds for the other.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_20() {
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  const promise1 = sleep(2000).then(() => "First Promise");
  const promise2 = sleep(1000).then(() => "Second Promise");
  const promiseList = [promise1, promise2, Promise.reject("Error")];
  /* 
   
    Exercise 20
    
    Using `Promise.allSettled`
		
		Use Promise.allSettled to check when an array of promises settle.

    We have defined a `promiseList` for you to use above
  
  */
  // CODE IN THE OPEN LINES BELOW

  let placeholder = "Delete me and code here";

  // CODE IN THE OPEN LINES ABOVE
}