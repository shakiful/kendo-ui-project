import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from './weather.model';
import { WeatherService } from './weather.service';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class WeatherComponent implements OnInit {
  weatherData: WeatherData[] = [];
  public gridView: GridDataResult;
  public limit = 10;
  public skip = 1;
  public buttonCount = 5;

  page: number = 1;
  total: number;

  constructor(
    private http: HttpClient,
    private weatherService: WeatherService
  ) {}

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.page = this.skip / 10 + 1;
    this.fetchWeatherData(this.page, this.limit);
    console.log(this.page);
    console.log(this.skip);
  }

  ngOnInit() {
    this.fetchWeatherData(this.page, this.limit);
    console.log(this.skip);
  }

  private loadItems(): void {
    console.log(this.skip);
    console.log(this.page);

    // const startIndex = (this.skip - 1) * this.limit;
    // const endIndex = startIndex + this.limit;

    this.gridView = {
      data: this.weatherData,
      total: this.total,
    };
    console.log(this.gridView);
    console.log(this.total);
    // console.log(endIndex);
  }

  fetchWeatherData(skip: number, limit: number) {
    this.weatherService
      .fetchWeatherData(skip, limit)
      .subscribe((response: any) => {
        console.log(skip);

        if (Array.isArray(response.data)) {
          (this.weatherData = response.data.map(
            (forecast: any) => ({
              id: forecast.id,
              weatherType: forecast.weather_type,
              icon: forecast.icon,
              temp: forecast.temp,
              feelsLike: forecast.feels_like,
              tempMin: forecast.temp_min,
              tempMax: forecast.temp_max,
              pressure: forecast.pressure,
              humidity: forecast.humidity,
              visibility: forecast.visibility,
              windSpeed: forecast.wind_speed,
              windDeg: forecast.wind_deg,
              clouds: forecast.clouds,
              dt: forecast.dt,
              createdAt: forecast.createdAt,
            }),
            (error: Error) => {
              console.log(error);
            }
          )),
            (this.page = response.page);
          this.limit = response.limit;
          this.total = response.total;
          console.log(this.skip);
          console.log(this.page);
          console.log(this.limit);
          console.log(this.total);

          this.loadItems();
        }

        console.log(this.weatherData); // Log the weather data after mapping
      });
  }

  deleteWeather(id: number) {
    // Remove the deleted item from the weatherData array
    this.weatherData = this.weatherData.filter((item) => item.id !== id);
    // this.toastr.success('Successfully deleted');
    (error) => {
      console.error('Error deleting weather item:', error);
    };
  }
}
