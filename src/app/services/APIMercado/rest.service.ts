import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  getResults: any;

  constructor(private http: HttpClient) { }

  public getLicitaciones() : Promise<any> {
    return this.http.get("http://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json?ticket=54296D76-CAFF-4964-886F-35E9223D30B4&estado=activas").toPromise();
  }
}
