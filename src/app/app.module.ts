import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { UserService } from './servicios/user.service';
import { CategoriasComponent } from './components/categorias/categorias.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
