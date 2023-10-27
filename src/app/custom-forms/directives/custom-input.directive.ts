import { Directive, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appCustomInput]',
})
export class CustomInputDirective {
  public _value!:any;
  constructor() {}
  onChange: any = () => {};
  onTouch: any = () => {};
  disabled!: boolean;
  @Output() public onBlur: EventEmitter<string> = new EventEmitter<string>();

  get value() {
    return this._value;
  }
  set value(val: string) {
    this._value=val;
    this.onChange(val);
    this.onTouch(val);
  }
  writeValue(val: any): void {
    this.value = val;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  blur() {
    this.onTouch();
    this.onBlur.emit();
  }
}
