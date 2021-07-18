import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CheckboxGroupComponent } from './custom-form/checkbox-group/checkbox-group.component';



@NgModule({
  declarations: [
    CheckboxGroupComponent
  ],
  imports: [
  
    // you can remove CommonModule from target module, where you import SharedModule
    CommonModule


  ],
  exports: [
    // vendor
    CommonModule,
    IonicModule,

    // local
    CheckboxGroupComponent
  ]
})
export class SharedModule { }
