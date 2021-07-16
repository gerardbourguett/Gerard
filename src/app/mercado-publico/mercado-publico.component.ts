import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MercadoPublicoDataSource, MercadoPublicoItem } from './mercado-publico-datasource';

@Component({
  selector: 'app-mercado-publico',
  templateUrl: './mercado-publico.component.html',
  styleUrls: ['./mercado-publico.component.css']
})
export class MercadoPublicoComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<MercadoPublicoItem>;
  dataSource: MercadoPublicoDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new MercadoPublicoDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
