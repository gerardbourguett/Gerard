import { Component, ViewChild } from '@angular/core';
import { RestService } from 'src/app/services/APIMercado/rest.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Page } from './model/Page';

export interface MercadoPublico {
  CodigoExterno: number;
  Nombre: string;
  CodigoEstado: string;
  FechaCierre: string;
}

/* const ELEMENT_DATA: MercadoPublico[] = [
]; */

@Component({
  selector: 'app-apimercado-publico',
  templateUrl: './apimercado-publico.component.html',
  styleUrls: ['./apimercado-publico.component.css']
})
export class APIMercadoPublicoComponent{

  page = new Page();
  rows = new Array<MercadoPublico>();

  ColumnMode = ColumnMode;

  constructor(private service: RestService) {
    this.page.pageNumber = 0;
    this.page.size = 20;
  }

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo: { offset: any; }) {
    this.page.pageNumber = pageInfo.offset;
    this.service.getResults(this.page).subscribe((pagedData: { page: Page; data: MercadoPublico[]; }) => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
    });
  }

  /* displayedColumns: string[] = ['CodigoExterno', 'Nombre', 'CodigoEstado', 'FechaCierre'];

  dataSource: any[] = [];

  constructor(private service: RestService) {
    this.service.getLicitaciones().then(data => {
      this.dataSource = data.Listado;
      console.log(this.dataSource);
    });
  } */
}
