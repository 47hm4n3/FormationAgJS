export class Cat {
     nom: string;
     couleur: string;
     age: number;


    constructor (n: string, c: string, a: number) {
        this.nom = n;
        this.couleur = c;
        this.age = a;
    }

    public getNom(): string {
        return this.nom;
    }
    public setNom(value: string) {
        this.nom = value;
    }

    public getCouleur(): string {
        return this.couleur;
    }
    public setCouleur(value: string) {
        this.couleur = value;
    }

    public getAge(): number {
        return this.age;
    }
    public setAge(value: number) {
        this.age = value;
    }

}