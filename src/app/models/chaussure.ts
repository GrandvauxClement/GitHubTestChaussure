export class Chaussure {
    id: number;
    nom: string;
    marque: string;
    type: string;
    taille: number;
    dateEntreStock: Date;
    constructor(id?: number, nom?: string, marque?: string, type?: string, taille?: number, dateEntreStock?: Date){
        this.id = id;
        this.nom = nom;
        this.marque = marque;
        this.type = type;
        this.taille = taille;
        this.dateEntreStock = dateEntreStock;
    }
}
