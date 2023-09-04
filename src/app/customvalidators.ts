import { AbstractControl } from "@angular/forms";

export class Customvalidators  {

    static addtion(target:string,s1:string,s2:string){
        return(form:AbstractControl)=>{
            const sum=form.value[target]
            const n1=form.value[s1]
            const n2=form.value[s2]
            if(n1+n2 ===parseInt(sum)){
             return null
             }
             return {addtion:true};

        }
        
        
    }
  

}
