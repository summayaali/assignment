
//Ques 01:
//Write a simple asynchronous TypeScript function fetchGreeting that returns a
//greeting message after a 2-second delay using setTimeout.

function fetchGreeting() {
    setTimeout(() => {
        console.log("Hello! Eisha");
    }, 2000);
}
fetchGreeting();
// Ques 02:
function simulateTask() {
    console.log("Task started.");
    setTimeout(() => {
        console.log("Task completed.");
    }, 1000);
}
simulateTask();
// Ques 03
//Write a function fetchData that returns a Promise which resolves with the string 
//Data fetched successfully!" after a delay of 1 second.
function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
fetchData1().then((message) => {
    console.log(message);
});
//Ques 04:
//Write a function fetchWithError that returns a Promise. It should randomly either
//resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
//delay of 1 second. Handle the rejection using .catch
function fetchWithError(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                resolve("Data fetched successfully!");
            } else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
async function testFetchWithError() {
    fetchWithError()
        .then(data => {
            console.log(data);  // Output if resolved: Data fetched successfully!
        })
        .catch(error => {
            console.error(error);  // Output if rejected: Data fetch failed!
        });
}

testFetchWithError();
//Ques 05:
//Write a function executeSequentially that executes two functions fetchData and
//processData sequentially using Promises, and logs the results in the order they are
//called.
let fetchData = new Promise((resolve, reject) => {
    resolve("Data Fetched successfully!");
});
let processData = new Promise((resolve, reject) => {
    resolve("Data processed successfully!");
});
async function executeSequentially() {
    let fetch = await fetchData;
    console.log(fetch);
    let process = await processData;
    console.log(process);
}
executeSequentially();
export {};