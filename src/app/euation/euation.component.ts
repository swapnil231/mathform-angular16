import { Component } from '@angular/core';

import { AbstractControl, FormControl,FormGroup } from '@angular/forms';
import { Customvalidators } from '../customvalidators';
import { filter ,delay,scan} from 'rxjs';


@Component({
  selector: 'app-euation',
  templateUrl: './euation.component.html',
  styleUrls: ['./euation.component.css']
})
export class EuationComponent {


  mathform=new FormGroup({
    a:new FormControl(this.randomNumber()),
    b:new FormControl(this.randomNumber()),
    answer:new FormControl('')
  },[ Customvalidators.addtion('answer','a','b')]
  
  )
  secondpersolution=0

  randomNumber(){
     return Math.floor(Math.random()*10)
  }

  ngOnInit(){
    this.mathform.statusChanges
    .pipe(filter (value=> value==='VALID'),delay(200),scan((acc)=>{
       return{
        numbersolved:acc.numbersolved+1,
        starttime:acc.starttime
       }
    },{numbersolved:0,starttime:new Date()})).subscribe(({numbersolved,starttime})=>{
        this.secondpersolution=(new Date().getTime()-starttime.getTime())/numbersolved/1000
        this.mathform.setValue({
        a:this.randomNumber(),
        b:this.randomNumber(),
        answer:''
      })
    
    })
  }

  get a(){
    return this.mathform.value.a
  }
  get b(){
    return this.mathform.value.b
  }



}
