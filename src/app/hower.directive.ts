import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHower]'
})
export class HowerDirective {
  @Input('appHower') color = 'blue';

  constructor( private element: ElementRef<HTMLElement>) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.color);
  }

  @HostListener('mouseleave')
  OnMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}

