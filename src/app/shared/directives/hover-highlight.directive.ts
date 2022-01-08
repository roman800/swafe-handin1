import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
})
export class HoverHighlightDirective {
  prevColor!: string;

  @Input() appHoverHighlight: string = 'var(--grey-hover)';

  constructor(private elementRef: ElementRef) {
    this.prevColor = (
      this.elementRef.nativeElement as HTMLElement
    ).style.backgroundColor;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlightElement(this.appHoverHighlight);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlightElement(this.prevColor);
  }

  private highlightElement(color: string) {
    (this.elementRef.nativeElement as HTMLElement).style.backgroundColor =
      color;
  }
}
