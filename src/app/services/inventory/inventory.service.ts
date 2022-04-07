import { Injectable } from '@angular/core';

export type PokemonInventoryItem = {
    name: string;
    amount?: number;
}

@Injectable({
    providedIn: 'root'
})
export class InventoryService {

    // INFO: This store can be used in localstorage, via reducer(ngrx) or using api
    // for this test, we will store in memory storage;
    collections: any = {};
    constructor() { }

    add(uid: string, pokemonItem: PokemonInventoryItem) {
        if (this.collections[uid]) {
            this.collections[uid].amount++;
        } else {
            this.collections[uid] = {
                name: pokemonItem.name,
                amount: 1
            };
        }
    };

    remove(uid: string): void {
        delete this.collections[uid];
    }

    reduce(uid: string, amount: number) {
        const itemAmount = this.collections[uid];
        if (itemAmount.amount >= amount) {
            itemAmount.amount = itemAmount.amount - amount;
            if (itemAmount.amount === 0) {
                delete this.collections[uid];
            }
        } else {
            console.warn(`Not possible to reduce(${amount}), more than current amount ${itemAmount.amount}`);
        }
    }

    getCollections(): any {
        return Object.values(this.collections);
    };

    getTotal() {
        return Object.values(this.collections).reduce( (acc:number, curr: any) => {
            return acc + curr.amount;
        }, 0);
    }

}
