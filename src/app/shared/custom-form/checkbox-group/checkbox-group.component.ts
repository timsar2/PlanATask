import { ChangeDetectorRef, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupComponent),
      multi: true
    }
  ]
})

export class CheckboxGroupComponent implements ControlValueAccessor {

  model: any;
  private onChange: (m: any) => void;
  private onTouched: (m: any) => void;

  constructor(private ref: ChangeDetectorRef) {
    ref.detach();
  }

  toggleCheck(index: number, event: Event) {
    this.model[index] = (event.target as HTMLInputElement).checked;
  }

  get getModel() {
    return this.model;
  }

  writeValue(value: any): void {
    this.model = value;

    // detect change manualy because we want to change object index inside of ngfor
    if(value != null) { this.ref.detectChanges(); }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
