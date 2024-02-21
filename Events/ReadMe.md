Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.

## Event concept
According to the dictionary, an event is a reference to a scheduled fact or event that can change its circumstances.

Once the concept is understood and taking it to the world of computers, thanks to programming we can handle each of the circumstances that a computer emits, such as processing a file, when we connect a peripheral, or even when a user clicks on the browser (everything can be captured).

To include the built-in Events module use the require() method. In addition, all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object:


The Node.js event loop is a continuously running, semi-infinite loop. It runs for as long as there is a pending asynchronous operation. Starting a Node.js process using the node command executes your JavaScript code and initializes the event loop. If Node.js encounters an asynchronous operation such as timers, files, and network I/O while executing a script, it offloads the operation to the native system or the thread pool.

Most I/O operations, such as reading and writing to file, file encryption and decryption, and networking, are time-consuming and computationally expensive. Therefore, to avoid blocking the main thread, Node.js offloads these operations to the native system. There, the Node process is running, so the system handles these operations in parallel.

## Event Loop

Node.js utilizes an event loop to execute asynchronous, non-blocking I/O operations. It delegates these operations to the underlying system kernel, which is often multi-threaded and can handle multiple tasks concurrently. Once an operation is finished, the kernel notifies Node.js, allowing the associated callback to be added to the poll queue for eventual execution.
