import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class UserService{
    baseURL = environment.apiURL +'empleado'
    constructor ( private httpClient: HttpClient){

    }

    getUser(userId:string):Observable<any>{
        const url = this.baseURL+userId;
        return this.httpClient.get<User>(url);

    }

   
    createUser(user: User): Observable<User>{
        return this.httpClient.post<User>(this.baseURL, user);
      }

}

    

export interface User{
    emp_id:number;
    emp_nombre:string;
    emp_apellido:string;


}