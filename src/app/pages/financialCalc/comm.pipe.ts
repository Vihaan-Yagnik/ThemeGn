import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'commaSeparated',
    standalone: true,
})
export class CommaSeparatedPipe implements PipeTransform {
    transform(value: number): string {
        if (!isNaN(value)) {
            let result = value.toLocaleString('en-IN');
            return result;
        }
        return "";
    }
}
