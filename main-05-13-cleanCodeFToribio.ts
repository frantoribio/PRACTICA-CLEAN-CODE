/**
 * Nombre: Francisco Toribio Respaldo
 * GitHub: frantoribio
 * Fecha: 18/10/2021
 * Descripción: Programa que devuelve si un número introducido por teclado es primo.
 * Archivo con clean code aplicado
 */

import read from 'readline-sync';
import chalk from 'chalk';
import utils from './mod/mod-05-13-CleanCodeFToribio'


let accountant, number: number;

utils.presentation();

console.log(chalk.blue("Programa que dice si un numero introducido es primo o no"));

number = read.questionInt (chalk.greenBright("Introduce un numero que no sea el 1: "));

if(number<=1){
    do {
        number = read.questionInt (chalk.red("Por favor, introduce un numero mayor que 1: "));
}
while (number<=1);}

utils.isPrimeNumber(number);

if (utils.isPrimeNumber(number)){

  console.log(chalk.green(number + " es primo"));

}else{console.log(chalk.yellow(number + " no es primo"));
}
