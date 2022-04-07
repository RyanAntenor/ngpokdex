import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PokemonService } from './services/pokemon.service';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            providers: [PokemonService],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  xit('should have as title ngPokedex', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ngPokedex');
  });
});
