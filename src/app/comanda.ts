import { Carti } from "./carti";
import { User } from "./user";

export class Comanda {
    id!: number;
    pret!: number;
    platita!: boolean;
    user!: User;
    listaCarti!: Carti[];
}
