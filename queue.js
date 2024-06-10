function queue(){
    this.id = "";
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

}