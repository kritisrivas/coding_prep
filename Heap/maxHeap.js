//Max Heap

class maxHeap {
  constructor() {
    this.heap = [];
  }
  getParentInd(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildInd(i) {
    return 2 * i + 1;
  }
  getRightChildInd(i) {
    return 2 * i + 2;
  }
  swap(i1, i2) {
    let tmp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = tmp;
  }
  push(elem) {
    this.heap[this.heap.length] = elem;
    this.heapifyUp();
  }
  heapifyUp() {
    let currentInd = this.heap.length - 1;
    while (this.heap[currentInd] > this.heap[this.getParentInd(currentInd)]) {
      this.swap(currentInd, this.getParentInd(currentInd));
      currentInd = this.getParentInd(currentInd);
    }
  }
  poll() {
    const maxValue = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.length--;
    this.heapifyDown();
    return maxValue;
  }
  heapifyDown() {
    let currentInd = 0;
    let leftChildInd = this.getLeftChildInd(currentInd);
    let rightChildInd = this.getRightChildInd(currentInd);
    while (this.heap[leftChildInd] !== undefined) {
      let biggestChildInd = this.heap[leftChildInd];
      if (
        this.heap[rightChildInd] !== undefined &&
        this.heap[rightChildInd] > this.heap[leftChildInd]
      ) {
        biggestChildInd = this.heap[rightChildInd];
      }
      if (this.heap[currentInd] < this.heap[this.biggestChildInd]) {
        swap(currentInd, biggestChildInd);
        currentInd = biggestChildInd;
      } else {
        return;
      }
    }
  }
}

const heap = new Heap();
console.log(heap);
heap.push(25);
heap.push(5);
heap.push(40);
heap.push(70);
heap.push(90);
heap.push(44);

console.log(heap.heap.join(","));

let a = [];
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());

console.log("top 5 elems", a);
console.log(heap.heap.join(","));
