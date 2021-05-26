class Processa {
    static Process(data){
        const dataSplit = data.split("\n");
        let  result = [];
        dataSplit.forEach(piece => {
            const add = piece.split(",");
            result.push(add);
        });
        console.log(result);
    }

}

module.exports = Processa;