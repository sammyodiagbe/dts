

type StackBluePrint = {
    stack: number[],
    search(item: number): string,
    peek(): any,
    pop(): any,
    push(data: number): void,
    print(): void
}
class Stack implements StackBluePrint{
    public stack: number[] = [];
    public size: number = 0;
    constructor() {
        this.stack = [];
    }

    peek(): any {
        if(!this.stack.length) throw new Error('Stack is empty');
        return this.stack[this.stack.length - 1];
    }
    pop(): any {
        const item = this.stack.pop();
        this.size--;
        return item;
    }
    push(data: number): void {
        this.stack.push(data);
        this.size++;
    }
    print() {
        console.log('Stack size, ', this.size)
        for(let item in this.stack) {
            console.log(`${item} => ${this.stack[item]}`);
        }
    }

    search(item: number): string {
        for(let t in this.stack) {
            console.log(this.stack[t] === item)
            if(this.stack[t] === item) {
                // means item has been found
                return `${this.stack[t]} was found at index ${t}`;
            }
        }
        return 'Item not found';
    }
}


const myStack = new Stack();
myStack.push(10);
myStack.push(9);
myStack.push(8);
myStack.push(7);
myStack.push(6);
console.log(myStack.peek())
myStack.print()
myStack.pop();
myStack.print();
console.log('Searching!')
console.log(myStack.search(7));