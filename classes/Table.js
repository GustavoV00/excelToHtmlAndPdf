class Table {
    constructor(arr){
        this.header = arr[0];
        // To remove arr[0], i can use shift() or use splice(0, x);
        arr.shift();
        this.rows = arr;
    }

    get RowCount(){
        return this.rows.length;
    }

    get ColumnCount(){
        return this.header.length;
    }
}


module.exports = Table;