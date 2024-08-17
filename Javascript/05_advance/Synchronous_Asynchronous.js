/*

- **Synchronous**: Tasks run one after the other. The code waits for one task to finish before starting the next. Think of it like a line at a checkout where each person waits for the one in front to be done before they can go.

- **Asynchronous**: Tasks can run independently and don’t need to wait for each other. The code can move on to other tasks while waiting for some tasks (like fetching data) to complete. It’s like multitasking—while you wait for your coffee, you can check your phone or read a book.

In summary, synchronous means waiting in line, and asynchronous means doing multiple things at once.*/



//Synchronous Example
//The syncTask function runs and blocks the execution of any subsequent code until it’s finished.
console.log('Start');

function syncTask() {
  for (let i = 0; i < 1000000000; i++) {}  // Simulate a long-running task
  console.log('Sync Task Complete');
}

syncTask();
console.log('End');

//Asynchronous Example with setTimeout
//The setTimeout function schedules the console.log('Async Task Complete') to run after 2 seconds, but it doesn’t block the rest of the code from running.
console.log('\nAsync Start');

function asyncTask() {
  setTimeout(() => {
    console.log('Async Task Complete');
  }, 2000);  // Simulate an asynchronous task with a delay of 2 seconds
}

asyncTask();
console.log('Async End');
//In the asynchronous example, even though the asyncTask function starts a task that takes time (2 seconds), the console.log('End') statement runs immediately after, without waiting for the setTimeout to finish. This demonstrates how asynchronous code allows other tasks to continue running while waiting for a specific task to complete.