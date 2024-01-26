//EXERCICE 3

/* Corriger la fonction suivante pour qu'elle retourne false.

```JavaScript
function checkEqual(a,b){
    return a == b;
}

checkEqual(5,"5"); */

function checkEqual(a,b){
    return a === b;
}

//console.log(checkEqual(5,"5"));



//EXERCICE 4

/* Corriger la fonction suivante pour qu'elle retourne true

```JavaScript
function checkAge(12){
    return a > 10;
}

checkEqual(12); */

function checkAge(age){
    return age > 10;
}

checkAge(12); 



//EXERCICE 5 

/* Completez la fonction suivante pour qu'elle retourne false. Vous devez utilisez un opérateur de négation

```JavaScript
function isNotAdmin(a){

}
isNotAdmin(true); */

function isNotAdmin(admin){
    return admin =! true ;
}
isNotAdmin(true);



//EXERCICE 6 

/* Écrivez une fonction JavaScript appelée `sommeChiffres` qui prend un tablau de nombres entier en entrée et retourne la somme de ses chiffres. Par exemple, si l'entrée est `[1, 2, 3]`, la fonction devrait retourner 6 (car 1 + 2 + 3 = 6).

Vous devez utiliser des boucles `for` et ne pas utiliser de méthodes telles que `reduce`.

```JavaScript
function sommeTableau(chiffres) {

}

sommeTableau([1, 2, 3]) // Retourne 6 */

function sommeTableau(chiffres) {
    let result = 0;
    for (let i = 0; i < chiffres.length; i++) {
        result+= chiffres[i];
    }
    return result;
}

sommeTableau([1, 2, 3]);



//EXERCICE 7 

/* Écrivez une fonction JavaScript appelée `plusGrand` qui prend un tableau de nombres en entrée et retourne le plus grand nombre du tableau.

Vous devez utiliser des boucles `for` et ne pas utiliser de méthodes telles que `reduce`.

```JavaScript
function plusGrand(tableau) {

}

plusGrand([3, 2, 6, 1, 4]) // Retourne 6 */

function plusGrand(tableau) {
    let result = tableau[0];
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i]>result) {
           result = tableau[i]; 
        }
    }
    return result;
}

plusGrand([3, 2, 6, 1, 4]);



//EXERCICE 10

/* Écrivez une fonction JavaScript appelée `inverserTableau` qui prend un tableau en entrée et retourne un nouveau tableau contenant les éléments du tableau d'origine dans l'ordre inverse. Par exemple, si le tableau d'entrée est [1, 2, 3], la fonction devrait retourner [3, 2, 1].

Vous devez utiliser des boucles `for`.

```JavaScript
function inverserTableau(tableau) {

}

inverserTableau([1, 2, 3]) // retourne [3, 2, 1] */

function inverserTableau(tableau) {
    let result = [];
    for (let i = tableau.length - 1; i >= 0; i--) {
        result.push(tableau[i]);
    }
    return result
}

inverserTableau([1, 2, 3]);



//EXERCICE 11

/* Écrivez une fonction JavaScript appelée `aDesDoublons` qui prend un tableau de mots en entrée et retourne `true` si le tableau contient des éléments en double (doublons), sinon retourne `false`.

Vous devez utiliser des boucles `for`.

```JavaScript
function aDesDoublons(tableau) {}

aDesDoublons(["mot", "stylo", "phrase", "mot", "jogging"]) // retourne true

aDesDoublons(["mot", "stylo", "phrase", "jogging"]) // retourne false */

function aDesDoublons(tableau) {
    for (let i = 0; i < tableau.length; i++) {
        const element = tableau[i];
        for (let j = 0; j < tableau.length; j++) {
            if (i != j && element === tableau[j]) {
                return true;
            } 
            
        }
    }
    return false;
}

aDesDoublons(["mot", "stylo", "phrase", "mot", "jogging"]);

aDesDoublons(["mot", "stylo", "phrase", "jogging"]);



//EXERCICE 12

/* Écrivez une fonction JavaScript appelée `produitTableau` qui prend un tableau de nombres en entrée et retourne le produit de tous les éléments du tableau.

Vous devez utiliser des boucles `for`.

```JavaScript
function produitTableau(tableau) {

}

produitTableau([2, 3, 6]) // retourne 36 */

function produitTableau(tableau) {
    let result = tableau[0];
    for (let i = 1; i < tableau.length; i++) {
        let produit = result * tableau[i];
        result = produit;
    }
    return result;
}

produitTableau([2, 3, 6]);



//EXERCICE 13 

/* Écrivez une fonction JavaScript appelée `rechercherElement` qui prend un tableau et un élément en entrée, puis retourne true si l'élément est présent dans le tableau, sinon retourne false.

Vous devez utiliser des boucles `for`.

```JavaScript
function rechercherElement() {

}

rechercherElement(["chaise", "table", "vase"], "table") // retourne true
rechercherElement(["chaise", "table", "vase"], "plateau") // retourne false */

function rechercherElement(tableau, mot) {
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i]===mot) {
            return true ;
        }        
    }
    return false ;
}

rechercherElement(["chaise", "table", "vase"], "table");
rechercherElement(["chaise", "table", "vase"], "plateau");



//EXERCICE 14 

/* Écrivez une fonction JavaScript appelée `fusionnerTableaux` qui prend deux tableaux en entrée et retourne un nouveau tableau qui est la fusion des deux tableaux d'origine.

Vous devez utiliser des boucles `for`.

```JavaScript
function fusionnerTableaux(tableau1, tableau2) {

}

fusionnerTableaux([2, 3, 4], [1, 2, 5]) // retourne [2, 3, 4, 1, 2, 5] */

function fusionnerTableaux(tableau1, tableau2) {
    let result = tableau1;
    for (let i = 0; i < tableau2.length; i++) {
        result.push(tableau2[i]);
    }
    return result;
}

fusionnerTableaux([2, 3, 4], [1, 2, 5]);



//----------------------------------------------------------



//EXERCICE 8 

/* Écrivez une fonction JavaScript appelée `trouverPlusLongMot` qui prend une chaîne de caractères (une phrase) en entrée et retourne le mot le plus long dans la phrase. Un mot est défini comme une série de caractères séparés par des espaces.

Vous devez utiliser des boucles `for`.

```JavaScript
function trouverPlusLongMot(phrase) {

}

compterMots("Ceci est une super phrase de test") // Retourne phrase */

function trouverPlusLongMot(phrase) {
    const tab = phrase.split(' ');
    let result = tab[0];
    for (let i = 1; i < tab.length; i++) {
        if (tab[i].length > result.length) {
            result = tab[i];
        }
    }
    return result;
}

trouverPlusLongMot("Ceci est une super phrase de test");



//EXERCICE 9 

/* Écrivez une fonction JavaScript appelée triCroissant qui prend un tableau de nombres en entrée et retourne le tableau trié par ordre croissant.

Vous devez utiliser des boucles `for`.

```JavaScript
function triCroissant(tableau) {

}

triCroissant(["3, 2, 5, 6, 1"]) // retourne [1, 2, 3, 5, 6]
```b */




/* function triCroissant(tableau) {
    let x ;
    for (let i = 1; i < tableau.length-1; i++) {
        x = tableau[i];
        let j = i ;
        while (j > 0 && tableau[j-1]>x) {
            t[j] = t[j - 1]
            j = j-1
        }
        t[j]=x;
    }
    return x;
}

console.log(triCroissant(["3, 2, 5, 6, 1"])); */


//je suis desolée, je n'essaie ni le 1 ni le 2, je ne sais pas
//m'en servir. Le 9 est un echec pour ma part, malgré la carotte fournie.


//Paamayim nekudotayim