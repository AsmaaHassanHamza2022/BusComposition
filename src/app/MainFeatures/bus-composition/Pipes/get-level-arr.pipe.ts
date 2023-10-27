import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getLevelArr'
})
export class GetLevelArrPipe implements PipeTransform {
  transform(value:number):any {
    let arr=[];
    for (let level = 1; level <= value; level++) {
     arr.push(level)
    }
    return arr;
   
  }

}
