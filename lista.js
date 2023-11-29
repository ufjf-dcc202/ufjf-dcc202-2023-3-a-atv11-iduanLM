const lista = ["um","dois", "tres"];

function getlista() {

    return lista;
}

function limpaLista(){

    lista.splice(0,3);

}

export {getlista, limpaLista};