import { AfterViewInit, Component, ElementRef, ViewChild, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MyCounterComponent } from '../my-counter/my-counter.component';

@Component({
  selector: 'app-static-property',
  templateUrl: './static-property.component.html',
  styleUrls: ['./static-property.component.scss']
})
export class StaticPropertyComponent implements OnInit, AfterViewInit {
  @ViewChild('targetElement', { static: true }) targetElementStaticTrue!: ElementRef<HTMLDivElement>;
  @ViewChild('targetElement', { static: false }) targetElementStaticFalse!: ElementRef<HTMLDivElement>;

  @ViewChild('componentRef', { static: true })
  componentRefTrue!: MyCounterComponent;

  @ViewChild('componentRef')
  componentRefFalse!: MyCounterComponent;

  @ViewChild(MyCounterComponent, { static: true})
  componentTrue!: MyCounterComponent;

  @ViewChild(MyCounterComponent)
  componentFalse!: MyCounterComponent;

  ngOnInit() {
    // static: true болса, бізде осыларға осы жерде доступ бар
    this.targetElementStaticTrue;
    this.componentRefTrue;
    this.componentTrue;

    // ал бұларға жоқ, өйткені static: false by default
    this.targetElementStaticFalse;
    this.componentRefFalse;
    this.componentFalse;
    debugger;
  }

  ngAfterViewInit() {
    // осы жерде барлығына доступ бар

    this.targetElementStaticTrue;
    this.componentRefTrue;
    this.componentTrue;

    this.targetElementStaticFalse;
    this.componentRefFalse;
    this.componentFalse;
    debugger;
  }
}
