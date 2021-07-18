import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'checkbox-group',
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
  private onChange: (m: any) => void;
  private onTouched: (m: any) => void;
  _model: any;
  items: boolean[];

  constructor() { }

  toggleCheck(index: number, event: Event) {
    this._model[index] = (event.target as HTMLInputElement).checked;
  }

  get model() {
    return this._model;
  }

  writeValue(value: any): void {
    this._model = value;
    if(value != null){
      this.items = [];
      this._model.forEach(element => {
        this.items.push(element);
      });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    
    this.onTouched = fn;
  }
}
