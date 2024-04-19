interface LinkedListStructure {
    insertAtFront(data: any) : void ,
    insertAtEnd(data: any): void,
    search(data: any): void,
    remove(index: number): boolean,
    add(data: any): void,
    removeFirst(): void,
    removeLast(): void,
    print(): void,
}

class LinkedList implements LinkedListStructure{
    public head:LinkNode | null = null;
    public tail: LinkNode | null = null;
    public size: number = 0;

    // adding a new item to the end of the listt

    add(data: any)  {
        console.log('Adding a new node')
        const newNode = new LinkNode(data);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            this.print();
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }

        current.next = newNode;
        this.tail = newNode;
        this.size++;
        this.print()
    }

    // checking if the list contains an item
    
    search(data: any) {
        console.log("===============")
        console.log('Searching for, ', data)
        if(!this.head) return null;
        let index = 0;
        let current = this.head;
        while(current.next) {
            if(current.data === data) {
                console.log("found at, ", index)
                this.print();
                return;
            }
            current = current.next;
            index++;
        }
        console.log('Not found');
        return null;
    }


    // remove an item from the list
    remove(pos: number): boolean {
        console.log("===========================")
        console.log("Removing from position, ", pos )
        if(this.head === null || pos > this.size) return false;
        let current = this.head;
        for(let index = 1; index < pos - 1; index++) {
            current = current.next!;
        }
        let toDelete = current.next;
        let after = toDelete!.next;
        current.next = after;
        this.size--;
        this.print()
        return true;
    }
    insertAtEnd(data: any) {
        if(!this.head) return;
        let newNode = new LinkNode(data);
        this.tail!.next = newNode;
        this.tail = newNode;
        this.size++;
        this.print()
    }
    insertAtFront(data: any) {
        let newNode = new LinkNode(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        this.print()
    }

    removeFirst(){
        if(this.head == null) return;
        let current = this.head!;
        this.head = current?.next;
        this.size--;
        this.print()
    }
    removeLast(){
        let current = this.head!;
        let next = current.next;
        while(next != null) {
            current = current.next!;
        }
        current.next = null;
        this.size--;
        this.print()
    }

    print(){
        console.log(this.size)
        let index = 0;
        if(this.head === null){
            console.log('Empty Linked list');
            return;
        };
        let current = this.head;
        while(current) {
            console.log(`${index} ==  ${current.data}`);
            index++;
            current = current.next!;
        }

    }

}

class LinkNode {
    public data: any | null = null;
    public next: LinkNode | null = null
    constructor(data: any) {
        this.data = data;
    }
}

const linkedList = new LinkedList();

linkedList.add(10);
linkedList.add(5);
linkedList.add(8);
linkedList.add(70);
linkedList.add(45);
linkedList.add(100);
linkedList.add(25)

// searching the list for specific datas
linkedList.search(5);
linkedList.search(40)

// removing from the list
linkedList.remove(5)

// 