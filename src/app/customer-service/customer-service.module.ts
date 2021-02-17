import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [HelpComponent, ContactComponent],
  imports: [
    CommonModule
  ]
})
export class CustomerServiceModule { }
