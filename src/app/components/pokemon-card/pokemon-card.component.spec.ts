import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialsModule } from 'src/app/materials/materials.module';

import { PokemonCardComponent } from './pokemon-card.component';

describe('PokemonCardComponent', () => {
    let component: PokemonCardComponent;
    let fixture: ComponentFixture<PokemonCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MaterialsModule,
            ],
            declarations: [PokemonCardComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PokemonCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
