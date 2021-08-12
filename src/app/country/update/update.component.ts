import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  continents: string[] = [
    'Asia', 'Africa', 'Europe', ' Australia', 'North America', 'South America', 'Antarctica'
  ];
  id: number = 0;
  country: Country = {
    id: 0,
    countryName: "",
    continent: "",
    capital: "",
    phoneCode: 0,
    currency: ""

  };

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as unknown as number;
    this.getCountryById(this.id);
  }

  getCountryById(id: number) {
    let response = this.httpClient.get('http://localhost:8080/rest/v2/country?id=' + id);
    response.subscribe((result) => {
      this.country = result as Country;
    });
  }

  updateCountry(country: object) {
    let response = this.httpClient.put('http://localhost:8080/rest/v2/country', country);
    response.subscribe((result) => {
      console.log(result)
    });
  }

  onSubmit(form: NgForm) {
    let country = {
      id: this.id,
      countryName: form.value.countryName,
      continent: form.value.continent,
      capital: form.value.capital,
      currency: form.value.currency,
      phoneCode: form.value.phoneCode
    }

    this.updateCountry(country);
    this.router.navigate(['/countries'])
  }
}


interface Country {
  id: number;
  countryName: string;
  continent: string;
  capital: string;
  currency: string;
  phoneCode: number;

}