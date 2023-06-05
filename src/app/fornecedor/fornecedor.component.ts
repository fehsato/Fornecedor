import { fornecedorService } from '../fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { fornecedor } from '../fornecedor';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class fornecedorComponent implements OnInit  {

  fornecedor: fornecedor[] = [];
  isEditing : boolean = false;
  formGroupClient : FormGroup;

  constructor (private fornecedorService: fornecedorService,
                private formBuilder: FormBuilder
    )
     {
       this.formGroupClient = formBuilder.group({

        id  : [''],
        nome : [''],       
       });

      }

  ngOnInit(): void {
    this.loadClient();
  }
  
  loadClient() {
    this.fornecedorService.getClients().subscribe(
      {
        next : data => this.fornecedor = data
      }
    );
  }

  save(){
    if(this.isEditing){
      this.fornecedorService.update(this.formGroupClient.value).subscribe(
        {
          next: () => {
          this.loadClient();
          this.formGroupClient.reset();
          this.isEditing = false;
        }
      }
      )
    }
    else{
      this.fornecedorService.save(this.formGroupClient.value).subscribe(
        {
          next: data => {
           this.fornecedor.push(data);
           this.formGroupClient.reset();
          }
        }
      );
      }
  }

  clean(){
    this.formGroupClient.reset();
    this.isEditing = false;
  }

  edit(fornecedor: fornecedor): void {
    this.formGroupClient.setValue(fornecedor);
    this.isEditing = true;
  }

  remove(fornecedor: fornecedor): void {
    this.fornecedorService.remove(fornecedor).subscribe({
      next : () => this.loadClient()
    })

  }

}