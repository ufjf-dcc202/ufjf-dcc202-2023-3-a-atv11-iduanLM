const lista = ["um","dois", "tres"];

function getlista() {

    return lista;
}

function limpaLista(){

    lista.splice(0);
}

function adicionarNalista(novoitem){
lista.push(novoitem);

}

export {getlista, limpaLista,adicionarNalista};