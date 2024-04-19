

type StackBluePrint = {
    stack: any[],
    
    peek(): any,
    pop(): any,
    push(data: number): void,
    print(): void
}
class Stack implements StackBluePrint{
    public stack: any = [];
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
}


const myStack = new Stack();
myStack.push(10);
myStack.push(10);
myStack.push(10);
myStack.push(10);
myStack.push(10);
console.log(myStack.peek())
myStack.print()
myStack.pop();
myStack.print();