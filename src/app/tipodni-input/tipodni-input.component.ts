import { Component, Input , OnChanges, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipodni-input',
  templateUrl: './tipodni-input.component.html',
  styleUrls: ['./tipodni-input.component.css']
})
export class TipodniInputComponent implements OnChanges{
  @Input() tipodni : string = "DNI"
  formularioDocumento: FormGroup;
  constructor(private form: FormBuilder){
    this.formularioDocumento = this.form.group({
      dni: [''],
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes?.['tipodni'].currentValue)
  }
  hasErrors(controlName:string, errorType:string){
    return this.formularioDocumento.get(controlName)?.hasError(errorType) && this.formularioDocumento.get(controlName)?.touched
  }
}
