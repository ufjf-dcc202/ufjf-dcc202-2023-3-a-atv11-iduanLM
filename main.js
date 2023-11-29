//main.js

import {getlista,limpaLista} from "lista.js";

const pEntrada= document.querySelector('#Entrada');
const olsaida= document.querySelector('#Saida');
const btnAdicionar= document.querySelector('#Adicionar');
const btnLimpar= document.querySelector('#Limpar');

atualizarItemdeLista();
limpaLista();
atualizarItemdeLista();

function atualizarItemdeLista(){
    olsaida.innerHTML ="";
    const lista = getlista;
    for (let i =0; i < array.lenght; i++){
        const item = lista[i];
        const li = document.createElement('li');
        li.textContent= item;
        olsaida.appendChild;
    }

}