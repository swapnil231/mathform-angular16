import { Directive ,ElementRef} from '@angular/core';
import { NgControl } from '@angular/forms';
import { map,filter } from 'rxjs';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private el:ElementRef,private controlname:NgControl) { }
ngOnInit(){
  this.controlname.control?.parent?.valueChanges
  .pipe(map(({a,b,answer})=>Math.abs((a+b-answer)/(a+b))))
  .subscribe((value)=>{
    console.log(value)
    if(value<0.2){
      this.el.nativeElement.classList.add('close')
    }else{
      this.el.nativeElement.classList.remove('close')
    }
  })
}
}
