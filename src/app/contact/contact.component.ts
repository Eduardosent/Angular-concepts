import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder , FormGroup , Validators} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  user : any = {
    name:'',
    email:''
  }
  tipoDni = 'DNI';
  activeUser: any =  {
    name : 'Pedro',
    lastname: 'Juarez',
    dni : '12345678'
  }
  formularioContacto: FormGroup;
  constructor(private form: FormBuilder){
    this.formularioContacto = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: [''],
      email: ['', [Validators.email, Validators.required]]
    })
  }
  ngOnInit(): void {
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value=>{
      this.tipoDni = value;
    })
    /*this.formularioContacto.valueChanges.subscribe(valor=>{
      console.log(valor)
    })
    /*this.formularioContacto.patchValue({
      name : this.activeUser.name,
      lastname : this.activeUser.lastname,
      dni: this.activeUser.dni
    })
    this.formularioContacto.get('name')?.disable();
    this.formularioContacto.get('lastname')?.disable()
    this.formularioContacto.get('dni')?.disable()*/
  }
  ngOnDestroy(): void {
    console.log("se destruyo el componente")
  }
  hasErrors(controlName:string, errorType:string){
    //console.log(this.formularioContacto.get(controlName)?.hasError(errorType))
    //console.log(this.formularioContacto.get(controlName)?.touched)
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }
  enviar(){
    console.log(this.formularioContacto)
  }
}
