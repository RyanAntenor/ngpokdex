import { TestBed } from '@angular/core/testing';

import { InventoryService } from './inventory.service';

describe('InventoryService', () => {
    let inventoryService: InventoryService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        inventoryService = TestBed.inject(InventoryService);
    });

    it('should be created', () => {
        expect(inventoryService).toBeTruthy();
    });

    it('should able to add item into the list', ()=> {

        inventoryService.add("1",  { name: "pikachu"});
        inventoryService.add("1",  { name: "pikachu"});
        inventoryService.add("2",  { name: "bulbasaur"});
        inventoryService.add("2",  { name: "bulbasaur"});
        inventoryService.add("2",  { name: "bulbasaur"});

        const inventory = inventoryService.getCollections();
        const total = inventoryService.getTotal();

        expect(total).toEqual(5);
        expect(inventory.length).toEqual(2);

    });

    it('should able to reduce amount', () =>  {
        inventoryService.add("1",  { name: "pikachu"});
        inventoryService.add("1",  { name: "pikachu"});
        inventoryService.add("2",  { name: "bulbasaur"});

        inventoryService.reduce("1", 2);
        const total = inventoryService.getTotal();

        expect(total).toEqual(1);
    });
});
