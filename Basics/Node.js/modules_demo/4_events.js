const { EventEmitter } = require("events");
const myEmitter = new EventEmitter();
;
// Event listener
myEmitter.on("customEvent", (arg1, arg2) => {
  console.log("Event received:", arg1, arg2);
});

// Emitting an event
myEmitter.emit("customEvent", "Argument 1", "Argument 2");

// Adding a one-time listener
myEmitter.once("onceEvent", () => {
  console.log("This event will be triggered only once.");
});

// Emitting the one-time event
myEmitter.emit("onceEvent");
myEmitter.emit("onceEvent"); // This won't trigger the listener again


console.log("Event names:", myEmitter.eventNames());//array of event names
console.log("Listener count:", myEmitter.listenerCount("customEvent"));// number of listeners for a specific event

// Removing a listener
const myListener = (arg) => {
  console.log("Listener called:", arg);
};
myEmitter.on("removeEvent", myListener);
myEmitter.removeListener("removeEvent", myListener);

// Removing all listeners
myEmitter.removeAllListeners("customEvent");
