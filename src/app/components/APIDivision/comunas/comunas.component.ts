import { Component, OnInit, ViewChild } from '@angular/core';
import { RestServiceService } from 'src/app/services/APIDivision/rest-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ComunasChile } from 'src/interfaces/ComunasChile';

@Component({
  selector: 'app-comunas',
  templateUrl: './comunas.component.html',
  styleUrls: ['./comunas.component.css']
})

export class ComunasComponent implements OnInit {

  ELEMENT_DATA: ComunasChile[] = [];
  dataSource = new MatTableDataSource<ComunasChile>(this.ELEMENT_DATA);
  displayedColumns: string[] = ['codigo','nombre', 'lat', 'lng', 'url', 'codigo_padre'];

  /* ELEMENT_DATA : ComunasChile[];
  displayedColumns: string[] = ['codigo', 'tipo', 'nombre', 'lat', 'lng', 'url', 'codigo_padre'];
  dataSource = new MatTableDataSource<ComunasChile>(this.ELEMENT_DATA); */

  constructor(private service:RestServiceService) { }

  ngOnInit(): void {
    this.getComunas();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /* constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  } */

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

  public getComunas(){
    let resp = this.service.comunas();
    resp.subscribe(report => this.dataSource.data = report as ComunasChile[])
  }

}


/** Builds and returns a new User. */
/* function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
  };
} */