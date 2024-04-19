"use strict";
class Queue {
    constructor() {
        this.items = [];
    }
    clear() {
        this.items = [];
    }
    peek() {
        return this.items[0];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        if (!this.items.length)
            throw new Error('Empty queue');
        const item = this.items.shift();
        return item;
    }
    get length() {
        return this.items.length;
    }
}
const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(5);
console.log(myQueue.length);
console.log(myQueue.dequeue());
console.log(myQueue.length);
