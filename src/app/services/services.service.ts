import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  listServices:any[] = [];

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<any>{
    return this.http.get("services.json");
  }



}
