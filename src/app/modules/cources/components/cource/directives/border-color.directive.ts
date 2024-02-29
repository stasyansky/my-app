import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})

export class BorderColorDirective implements AfterViewInit {
@Input('appBorderColor') date: string = '';

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) { }

  public ngAfterViewInit(): void {
    const currentDate = new Date().getTime();
    const creationDate = new Date(this.date).getTime();
    const [child] = this.element?.nativeElement?.children;

    if (creationDate < currentDate && creationDate >= (currentDate - 14 * 86400000)) {
      this.renderer.setStyle(child, 'border', '2px solid #01796f')
    } else if (creationDate > currentDate) {
      this.renderer.setStyle(child, 'border', '2px solid #0014a8')
    }
  }
}
