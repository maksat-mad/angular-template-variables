import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MyCounterComponent } from '../my-counter/my-counter.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  @ViewChild(MyCounterComponent, {})
  counterReference!: MyCounterComponent;

  @ViewChild('componentTemplateRef')
  componentTemplateRef!: MyCounterComponent;

  ngOnInit() {
    this.counterReference;
    debugger;

    this.componentTemplateRef;
    debugger;
  }

  ngAfterViewInit() {
    this.counterReference;
    debugger;

    this.componentTemplateRef;
    debugger;

    console.log(this.counterReference === this.componentTemplateRef);
  }

  increaseCounter() {
    this.counterReference.increaseCounter();
  }

  decreaseCounter() {
    this.counterReference.decreaseCounter();
  }
}
