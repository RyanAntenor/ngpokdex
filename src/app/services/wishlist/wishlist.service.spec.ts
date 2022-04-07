import { TestBed } from '@angular/core/testing';
import { WishlistService } from './wishlist.service';

describe('WishlistService', () => {
    let wishListService: WishlistService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        wishListService = TestBed.inject(WishlistService);
    });

    it('should able to get wishlist', () => {
        // Empty array
        const wishList = wishListService.getList();
        expect(wishList).toEqual([]);
    });

    xit('should trigger error handler in wishlist', () => {
       // TODO: if service has been setup using via localstorage or api
    })

    it('should be created', () => {
        expect(wishListService).toBeTruthy();
    });


    it('should able to add uid into wishlist', () => {

        wishListService.add("1");
        wishListService.add("2");
        wishListService.add("2");

        const withlist = wishListService.getList();

        expect(withlist).toContain("2");
        expect(withlist.length).toEqual(2);

    });

    it('should able to delete pokemon from the wishlisth', () => {

        wishListService.add("1");
        wishListService.add("2");
        wishListService.add("3");

        wishListService.remove("2");

        const list = wishListService.getList();
        expect(list).toEqual([ '1', '3' ]);
    });
});
