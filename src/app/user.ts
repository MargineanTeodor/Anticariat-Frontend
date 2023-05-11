import { Carti } from "./carti";
import { Comanda } from "./comanda";

export class User {
    id!: number;
    name!: string;
    passw!: string;
    admin!: boolean;
    logat!:boolean;
    listaCarte!: Carti[];
    listaComenzi!: Comanda[];
}
