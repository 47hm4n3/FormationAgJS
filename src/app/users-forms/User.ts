import { Cat } from '../cats/Cat';

export class User {

    nom : string = '';
    prenom : string = '';
    age : number = 0;
    adresse : Array<{num: number, rue: string, ville: string}> = [];
    listeChats : Array<Cat> =[];

    constructor () {
    }

}