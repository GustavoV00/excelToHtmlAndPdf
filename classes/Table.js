class Table {
    constructor(arr){
        this.header = arr[0];
        // To remove arr[0], i can use shift() or use splice(0, x);
        arr.shift();
        this.rows = arr;
    }
}


module.exports = Table;