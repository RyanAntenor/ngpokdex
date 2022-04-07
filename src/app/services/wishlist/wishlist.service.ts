import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type PokemonWishListEntry = {
    uid: string;
}

@Injectable({
    providedIn: 'root'
})
export class WishlistService {

    // TODO: This can be either stored in ui storage or via backend api
    // for this test we will store in memory
    private wishLists = new Set<string>();

    list: Subject<string[]> = new Subject<string[]>();

    constructor() { }

    getList() {
        return Array.from(this.wishLists).map( a => a );
    }

    add(uid: string ) {
        this.wishLists.add(uid);
        this.list.next(this.getList());
    }

    remove(uid: string ) {
        this.wishLists.delete(uid);
        this.list.next(this.getList());
    }
}
