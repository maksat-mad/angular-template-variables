import { Component, ContentChild, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { ContentChildDemoComponent } from '../content-child-demo/content-child-demo.component';

@Component({
  selector: 'app-my-cards2',
  templateUrl: './my-cards2.component.html',
  styleUrls: ['./my-cards2.component.scss']
})
export class MyCards2Component implements AfterContentInit {

  @ContentChild(ContentChildDemoComponent)
  contentChildDemoProperty: ContentChildDemoComponent | undefined;

  @ContentChildren(ContentChildDemoComponent)
  contentChildrenDemoProperty:
   QueryList<ContentChildDemoComponent> | undefined;

  ngAfterContentInit() {
    this.contentChildDemoProperty;
    this.contentChildrenDemoProperty;
    console.log(this.contentChildDemoProperty?.title);
    console.log(this.contentChildDemoProperty);
    this.contentChildrenDemoProperty?.forEach((childComponent) => {
      console.log(childComponent.title);
    });
  }
}
