import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'country-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  states: string[] = [
    'Asia', 'Africa', 'Europe', ' Australia', 'North America', 'South America', 'Antarctica'

  ];

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {

  }

  createCountry(country: object) {
    let response = this.httpClient.post('http://localhost:8080/rest/v2/country', country);
    response.subscribe((result) => {
      console.log(result)
    });
  }


  onSubmit(form: NgForm) {
    let country = {
      countryName: form.value.countryName,
      continent: form.value.continent,
      capital: form.value.capital,
      currency: form.value.currency,
      phoneCode: form.value.phoneCode

    }

    this.createCountry(country);
    this.router.navigate(['/countries'])
  }



}

