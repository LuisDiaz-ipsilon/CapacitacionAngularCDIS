import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appRangoYear]',
  providers: [{provide: NG_VALIDATORS, useExisting: RangoYearDirective, multi: true}]
})
export class RangoYearDirective implements Validator {

  @Input('appRangoYear') RangoYear: number[];

  constructor() { }

  validate(control: AbstractControl): { [key: number[]]: any } {
    return this.RangoYear ? this.RangoYearValidator(new RegExp(this.RangoYear, "i"))(control) : null;
  }

  RangoYearValidator(yearRe: RegExp): ValidatorFn {

    return (control: AbstractControl): { [key: number[]]: any }| null => {
      elementsArray: Number=control.value.length;
      yearsModelArr: Number[]=control.value;
      const rangoYear = yearRe.test();
      return rangoYear ? {'rangoYear' : { value: control }} : null;
    }
  }


}
