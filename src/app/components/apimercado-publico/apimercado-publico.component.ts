import { Component, ViewChild } from '@angular/core';
import { RestService } from 'src/app/services/APIMercado/rest.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface MercadoPublico {
  CodigoExterno: number;
  Nombre: string;
  CodigoEstado: string;
  FechaCierre: string;
}

const ELEMENT_DATA: MercadoPublico[] = [
];

@Component({
  selector: 'app-apimercado-publico',
  templateUrl: './apimercado-publico.component.html',
  styleUrls: ['./apimercado-publico.component.css']
})
export class APIMercadoPublicoComponent{

  displayedColumns: string[] = ['CodigoExterno', 'Nombre', 'CodigoEstado', 'FechaCierre'];

  dataSource: any[] = [];

  constructor(private service: RestService) {
    this.service.getLicitaciones().then(data => {
      this.dataSource = data.Listado;
      console.log(this.dataSource);
    });
  }

  

  

  /* applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } */

}
