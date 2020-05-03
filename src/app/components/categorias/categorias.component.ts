import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriaPost, Categoria } from '../../servicios/categoria.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  signupForm: FormGroup

  constructor(private _builder: FormBuilder, private categoriaService: CategoriaPost) {
    this.signupForm = this._builder.group(
      {
        nombre: ['', Validators.required],
        apellido: ['',Validators.required],
        correo: ['',Validators.required],
        telefono: ['',Validators.required]
      }
    )
 
    console.log("correcto")  
   }

  ngOnInit(): void {
    this.getQuery();
  }

  enviar(values) {
    console.log(values);

    return values;

  }

  getQuery() {
    this.categoriaService.getDate(this.signupForm.value.nombre,this.signupForm.value.apellido,this.signupForm.value.correo,this.signupForm.value.telefono)
    
        this.categoriaService.getCategorias().subscribe((data:Categoria)=>{
          console.log(data);
          
        });
    
        //idCategoria: this.signupForm.value.idCategoria,
        console.log(this.signupForm.value.nombre);

    
      }

}
