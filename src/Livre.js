export default class Livre{
    constructor (id, titre, qtestock, prix) {
        this._id= id;
        this._titre = titre;
        this._qtestock = qtestock;
        this._prix = prix;
        }
        
        // Getters
        get id() {
            return this._id;
        }
        get titre() {
            return this._titre;
        }
        get qtestock() {
            return this._qtestock;
        }
        get prix() {
            return this._prix;
        }
        
        // Setters
        set titre(titre) {
            this._titre = titre;
        }
        set qtestock(qtestock) {
            this._qtestock = qtestock;
        }
        set prix(prix) {
            this._prix = prix;
        }

        // ToString
        toString() {
            return `Livre: ${this._titre} ${this._qtestock} ${this._prix}`;
        }
}