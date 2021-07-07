import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private http: HttpClient) { }

  public comunas(){
    return this.http.get("https://apis.digital.gob.cl/dpa/comunas")
  }

  public provincias() {
    return this.http.get("https://apis.digital.gob.cl/dpa/provincias")
  }

  public regiones() {
    return this.http.get("https://apis.digital.gob.cl/dpa/regiones")
  }

  
}
