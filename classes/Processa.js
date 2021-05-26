class Processa {
    static Process(data){
        const dataSplit = data.split("\n");
        let  result = [];
        dataSplit.forEach(piece => {
            const add = piece.split(",");
            result.push(add);
        });
        return result;
    }

}

module.exports = Processa;