import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    
   @HostBinding('style.backgroundColor') bG:string | undefined;
  constructor(private render:Renderer2,private ElRef:ElementRef) { }


ngOnInit(): void {
    // this.render.setStyle(this.ElRef.nativeElement,'color','red');
}
 
@HostListener('mouseenter') mouseMove(){
  this.render.setStyle(this.ElRef.nativeElement,'color','red');
  this.bG="black";
}

@HostListener('mouseleave') mouseLeave(){
  this.render.setStyle(this.ElRef.nativeElement,'color','#09c');
  this.bG="transparent";
}

}
