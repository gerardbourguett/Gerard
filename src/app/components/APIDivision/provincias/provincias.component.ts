import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestServiceService } from 'src/app/services/APIDivision/rest-service.service';
import { ProvinciasChile } from 'src/interfaces/ProvinciasChile';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {

  ELEMENT_DATA: ProvinciasChile[] = [];
  dataSource = new MatTableDataSource<ProvinciasChile>(this.ELEMENT_DATA);
  displayedColumns: string[] = ['codigo', 'nombre', 'lat', 'lng', 'url', 'codigo_padre'];

  constructor(private service: RestServiceService) { }

  ngOnInit(): void {
    this.getProvincias();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public getProvincias() {
    let resp = this.service.provincias();
    resp.subscribe(report => this.dataSource.data = report as ProvinciasChile[])
  }

}
