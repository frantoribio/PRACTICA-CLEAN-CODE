/**
 * Nombre: Francisco Toribio Respaldo
 * GitHub: frantoribio
 * Fecha: 09/10/2021
 * Descripción: Ejercicio 02-13. Módulo que calcula si un número es primo
 * Archivo con clean code aplicado.
 */

/**
 * Funcion que devuelve si un numero es primo o no
 * @param number para saber si es primo
 * @returns Verdadero si es primo
 */

function isPrimeNumber(number: number): boolean { //función que determina si un número es primo

  let isPrimeNumber=true;
  let accountant = 2;
  while ((isPrimeNumber) && (accountant != number)) {

    if (number % accountant == 0)
      isPrimeNumber= false;
      accountant++;
  }
  return isPrimeNumber;
}


function presentation(): void { //función que presenta el programa

  console.log("Usando librería de números primos");
}

export default { isPrimeNumber, presentation };
