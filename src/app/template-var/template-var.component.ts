import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template-var',
  templateUrl: './template-var.component.html',
  styleUrls: ['./template-var.component.scss']
})
export class TemplateVarComponent {

  firstExample = '';
  secondExample = '';

  callPhone(phone: HTMLInputElement) {
    console.log(phone);
    console.log(phone.value);
  }
}
