import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import BASE_URL from '../helper/helper';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private readonly http: HttpClient) { }

   public getLocations(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE_URL}/location/get`);
  }

  public login(user:any): Observable<any>{
    return this.http.post("http://192.168.10.34:8080/admin/login",user)
  }


}
