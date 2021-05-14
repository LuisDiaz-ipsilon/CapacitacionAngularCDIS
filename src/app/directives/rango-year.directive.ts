import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
import { ModalAddUpdateComponent } from '../components/modals/modal-add-update/modal-add-update.component';

@Directive({
  selector: '[appRangoYear]',
  providers: [{provide: NG_VALIDATORS, useExisting: RangoYearDirective, multi: true}]
})
export class RangoYearDirective implements Validator {

  @Input('appRangoYear') RangoYear: string;

  year: ModalAddUpdateComponent;

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {
    return this.RangoYear ? this.RangoYearValidator(new RegExp(this.RangoYear, "i"))(control) : null;
  }

  RangoYearValidator(yearRe: RegExp): ValidatorFn {

    return (control: AbstractControl): { [key: string]: any }| null => {
      var yearsModelArr: number[]= this.year.getArrYears();
      const rangoYear = yearsModelArr[0]>yearsModelArr[yearsModelArr.length]//yearRe.test();
      return rangoYear ? {'rangoYear' : { value: control }} : null;
    }
  }


}
