const Node = require('./node');

class LinkedList {
    constructor() {
        this.list = [];
    }
    get length(){
        return this.list.length;
    }
    get _head(){
        let head = this.list[0];
        return head ? head : null;
    }
    get _tail(){
        let tail = this.list[this.list.length - 1];
        return tail ? tail : null;
    }
    append(data) {
        let lastIndex = this.length >= 0 ? this.length - 1 : null;
        let lastNode = lastIndex >= 0 ? this.list[lastIndex] : null;
        let newNode = new Node(data, lastNode, null);
        this.list.push(newNode);
        if(lastNode) {
            lastNode.next = newNode;
        }
        return this;
    }

    head() {
        return this._head && this._head.data;
    }

    tail() {
        return this._tail && this._tail.data;
    }

    at(index) {
        return this.list[index].data;
    }

    insertAt(index, data){
        let previous = this.list[index-1];
        let next = this.list[index+1];
        let newNode = new Node(data, previous, next);
        this.list[index] = newNode;
        return this;
    }

    isEmpty() {
        return !this.length;
    }

    clear() {
        this.list = [];
        return this;
    }

    deleteAt(index) {
        let deletedNode = this.list[index];
        let nextNode = deletedNode.next;
        let prevNode = deletedNode.prev;

        if(prevNode) {
            prevNode.next = nextNode;
        }
        if (nextNode){
            nextNode.prev = prevNode;
        }
        this.list.splice(index,1);

        return this;
    }

    reverse() {
        for (let i = 1; i<=this.list.length/2; i++){
            let temp = this.list[i-1].data;
            this.list[i-1].data = this.list[this.list.length-i].data;
            this.list[this.list.length-i].data = temp;
        }
        return this;
    }

    indexOf(data) {
        let dataList = this.list.map((node) => {
            return node.data;
        });
        return dataList.indexOf(data);
    }
}

module.exports = LinkedList;
