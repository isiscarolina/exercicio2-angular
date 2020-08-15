import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

    personas: any = []
  constructor(private http: HttpClient) { }

  getTodos() {
    

    return this.http.get('https://jsonplaceholder.typicode.com/users');

  }

getPersona(id) {
  return this.http.get('https://jsonplaceholder.typicode.com/users'+id);
}

}

    