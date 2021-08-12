import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'countryName', 'continent', 'capital', 'currency', 'phoneCode', 'actions'];
  dataSource: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    let response = this.httpClient.get('http://localhost:8080/rest/v2/countries');
    response.subscribe((result) => {
      this.dataSource = new MatTableDataSource<Country>(result as Country[]);
    });
  }

  deleteCountry(id: number) {
    let response = this.httpClient.delete('http://localhost:8080/rest/v2/country?id=' + id).subscribe();
  }


}

export interface Country {
  id: number;
  countryName: string;
  continent: string;
  capital: string;
  currency: string;
  phoneCode: number;
}




