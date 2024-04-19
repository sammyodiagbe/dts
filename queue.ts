type QueueBlueprint = {
    items: number[],
    clear(): void,
    peek(): number,
    enqueue(item: number): void,
    dequeue(): number,
    get length(): number,
}

class Queue implements QueueBlueprint {
    public items: number[] = [];


    clear(): void {
        this.items = [];
    }

    peek(): number {
        return this.items[0];
    }

    enqueue(item: number): void {
        this.items.push(item)
    }

    dequeue(): number {
        if(!this.items.length) throw new Error('Empty queue')
        const item = this.items.shift()!;

        return item;
    }

    get length(): number {
        return this.items.length
    }
}

const myQueue = new Queue()

myQueue.enqueue(10);
myQueue.enqueue(5);

console.log(myQueue.length)

console.log(myQueue.dequeue())
console.log(myQueue.length)