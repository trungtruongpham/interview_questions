// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.fisrt = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.fisrt.push(record);
  }

  remove() {
    while (this.fisrt.peek()) {
      this.second.push(this.fisrt.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.fisrt.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while (this.fisrt.peek()) {
      this.second.push(this.fisrt.pop);
    }
    const record = this.second.peek();
    while (this.second.peek()) {
      this.fisrt.push(this.second.pop());
    }

    return record;
  }
}

module.exports = Queue;
