class Sejour {

    constructor(private _nom: string, private _prix: number) { }

    get nom() {
        return this._nom;
    }
    set nom(nom) {
        this._nom = nom;
    }

    get prix() {
        return this._prix;
    }

    set prix(prix) {
        this._prix = prix;
    }

}

class SejourService {

    constructor(private _sejour: Sejour[]) {
        this._sejour[0] = new Sejour('Bordeaux', 22);
        this._sejour[1] = new Sejour('Paris', 21);
        this._sejour[2] = new Sejour('Limoges', 20);
        this._sejour[3] = new Sejour('Lyon', 19);
    }
    getSejourByName(name: string): Sejour | void {
        for (let i of this._sejour) {
            if (i.nom === name) {
                return i;
            }
            else {
                console.log('${name} est introuvable')
            }
        }
    }
}

let tabService: Sejour[] = new Array;
const sejour = new SejourService(tabService);

console.log(sejour.getSejourByName('Limoges'));
