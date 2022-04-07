import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
    selector: 'pkm-pokemon-card',
    templateUrl: './pokemon-card.component.html',
    styleUrls: ['./pokemon-card.component.scss'],

})
export class PokemonCardComponent implements OnInit {

    @Input() name!: string;
    @Input() pokemonIndex!: number;

    @Input() types!: any[];

    constructor() {

    }

    ngOnInit(): void {
    }

    pad(n: number, length: number) {
        var len = length - ('' + n).length;
        return (len > 0 ? new Array(++len).join('0') : '') + n;
    }


}

// @Pipe({ name: 'indexNumber' })
// export class TruncatePipe implements PipeTransform {
//     transform(value: string) {
//         // return value.split(' ').slice(0, 2).join(' ') + '...';
//         var len = length - ('' + 2).length;
//         return (len > 0 ? new Array(++len).join('0') : '') + 2
//     }
// }
