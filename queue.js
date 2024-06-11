function queue(id){
    this.id = id;
    this.line = [];

    let enqueue = (node) => {
        this.line.push(node);
    };

    let dequeue = (node) => {
        this.line.shift();
    };

    let peek = () => {
        return this.line(this.line.length(0))
    };

    let isEmpty = () => {
        if (this.line.length == 0){
            return true;
        } 
        return false;
    };

    let isFull = () => {
        if (this.line.length > 0){
            return true;
        } 
        return false;
    };

}