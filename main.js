//main.js

import {getlista} from "lista.js";



const pEntrada= document.querySelector('#Entrada');
const olsaida= document.querySelector('#Saida');
const btnAdicionar= document.querySelector('#Adicionar');
const btnLimpar= document.querySelector('#Limpar');

olsaida.innerHTML ="";

atualizarItemdeLista();

function atualizarItemdeLista(){

    const lista = getlista;
    for (let i =0; i < array.lenght; i++){
        const item = lista[i];
        const li = document.createElement('li');
        li.textContent= item;
        olsaida.appendChild;
    }

}