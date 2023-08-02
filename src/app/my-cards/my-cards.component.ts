import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.scss']
})
export class MyCardsComponent implements AfterContentInit {


  @ContentChild('header')
  cardHeaderData!: ElementRef;

  // @ContentChild('header')
  // cardHeaderData: ElementRef = {
  //   nativeElement: undefined
  // }

  ngAfterContentInit() {
    console.log(this.cardHeaderData);

    this.cardHeaderData.nativeElement.style.color = 'blue';
    this.cardHeaderData.nativeElement.style.backgroundColor = 'yellow';
    this.cardHeaderData.nativeElement.style.fontSize = '24px';
  }
}
