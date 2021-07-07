import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestServiceService } from 'src/app/services/APIDivision/rest-service.service';
import { RegionesChile } from 'src/interfaces/RegionesChile';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css']
})
export class RegionesComponent implements OnInit {

  ELEMENT_DATA: RegionesChile[] = [];
  dataSource = new MatTableDataSource<RegionesChile>(this.ELEMENT_DATA);
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
    let resp = this.service.regiones();
    resp.subscribe(report => this.dataSource.data = report as RegionesChile[])
  }

}
