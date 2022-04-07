import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatOptionModule,
        MatCardModule,
        MatChipsModule,
        MatButtonModule,
        MatPaginatorModule
    ],
    exports: [
        MatAutocompleteModule,
        MatFormFieldModule,
        MatOptionModule,
        MatCardModule,
        MatChipsModule,
        MatButtonModule,
        MatPaginatorModule
    ]
})
export class MaterialsModule { }
