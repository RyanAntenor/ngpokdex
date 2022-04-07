import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailComponent } from './pages/detail/detail.component';
import { MaterialsModule } from './materials/materials.module';
import { TestFormSearchComponent } from './test-form-search/test-form-search.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@NgModule({
    declarations: [
        AppComponent,
        DetailComponent,
        TestFormSearchComponent,
        HomeComponent,
        PokemonCardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
