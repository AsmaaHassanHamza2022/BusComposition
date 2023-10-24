import { Directive } from '@angular/core';

@Directive({
  selector: '[appCustomInput]'
})
export class CustomInputDirective {

  constructor() { }
  onChange: any = () => {}
  onTouch: any = () => {}
  disabled!:boolean;

  set value(val: string){
    this.onChange(val)
    this.onTouch(val)
}
  writeValue(val: any): void {
    this.value=val;
  }
  registerOnChange(fn: any): void {
    this.onChange=fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch=fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled=isDisabled;
  }

}
