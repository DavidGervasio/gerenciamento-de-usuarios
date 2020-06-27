
module.exports = {
    formataData(dataString) {
        let data = new Date(dataString);
        let dia = data.getDate();
        let mes = data.getMonth();
        let ano = data.getFullYear();
        return dia + '/' + (mes + 1) + '/' + ano;

    }
}



