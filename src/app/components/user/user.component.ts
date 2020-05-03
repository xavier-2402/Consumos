import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../servicios/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  model: User = {emp_id: 0, emp_nombre: '', emp_apellido: ''};

  constructor(private userService: UserService) {


   }

  ngOnInit(): void {
   
  }
  onSubmit() {
     console.log(this.model);
    this.userService.createUser(this.model).subscribe((response: User) => console.log(response));
  }

}


