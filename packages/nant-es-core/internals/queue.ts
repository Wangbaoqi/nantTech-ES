

interface NodeItem {
  item: any;
  next: NodeItem | null
}

class Queue {
  head: null | NodeItem = null;
  tail: null | NodeItem = null;

  constructor() {
    this.head = null;
    this.tail = null
  }

  add(item: any) {
    const node = { item, next: null }
    const tail = this.tail;
    if(tail) tail.next = node;
    else this.head = node;
    this.tail = node;
  }

  get() {
    // first in first out
    const node = this.head;
    if(node) {
      const next = this.head = node.next;
      if(!next) this.tail = null;
      return node.item
    }
  }
}

export default Queue