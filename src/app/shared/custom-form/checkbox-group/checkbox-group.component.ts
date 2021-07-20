import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef } from '@angular/core';
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxGroupComponent implements ControlValueAccessor {
  // private onChange: (m: any) => void;
  private onTouched: (m: any) => void;
  _model: any;
  items: boolean[];

  constructor(private ref: ChangeDetectorRef) { }

  toggleCheck(index: number, event: Event) {
    this._model[index] = (event.target as HTMLInputElement).checked;
  }
  onChange(m: any){
  }
  get model() {
    return this._model;
  }

  writeValue(value: any): void {
    this._model = value;
    
    // detect change manualy because we want to change object index inside of ngfor
    this.ref.detectChanges();
    this.ref.detach();

    //* Instead of using new obj to prevent missing index on ngfor, now we use change detaction strategy*/
    // if(value != null){
    //   this.items = [];
    //   this._model.forEach(element => {
    //     this.items.push(element);
    //   });
    // }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    
    this.onTouched = fn;
  }
}
