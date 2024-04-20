class BinaryNode {
  public data: number | null;
  public left: BinaryNode | null;
  public right: BinaryNode | null;

  constructor(data: number) {
    this.left = null;
    this.right = null;
    this.data = data;
  }

  insertNode(value: number) {
    if (this.data === null) {
      this.data = value;
    } else {
      if (this.data < value) {
        if (this.left === null) {
          // create a new left node and insert it
          this.left = new BinaryNode(value);
        } else {
          this.left.insertNode(value);
        }
      } else if (this.data > value) {
        if (this.right === null) {
          this.right = new BinaryNode(value);
        } else {
          this.right.insertNode(value);
        }
      } else {
        throw new Error("Duplicate values");
      }
    }
  }

  inOrder() {
    if (this.data === null) return;

    if (this.left != null) {
      this.left.inOrder();
    }
    console.log(this.data);
    if (this.right != null) {
      this.right.inOrder();
    }
  }

  findNode(value: number): boolean {
    if (!value || !this.data) throw new Error("Invalid value provided");

    console.log(`Comparing ${value} against ${this.data}`);

    if (value < this.data && this.left) {
      return this.left.findNode(value);
    }

    if (value > this.data && this.right) {
      return this.right.findNode(value);
    }

    return value === this.data;
  }
}

const bst = new BinaryNode(10);

bst.insertNode(25);
bst.insertNode(12);
bst.insertNode(4);
bst.insertNode(30);
bst.insertNode(2);

bst.inOrder();

console.log(bst.findNode(12));
