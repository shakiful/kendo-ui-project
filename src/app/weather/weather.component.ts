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

  total_page: number;

  // tableSize: number = 10;
  // tableSizes: any = [5, 10, 15, 20];

  constructor(
    private http: HttpClient,
    private weatherService: WeatherService
  ) {}

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  ngOnInit() {
    this.fetchWeatherData(this.skip, this.limit);
    console.log(this.skip, this.limit, this.total_page);
    console.log(this.fetchWeatherData(this.skip, this.limit));
  }

  private loadItems(): void {
    const startIndex = this.skip;
    const endIndex = this.skip + this.limit;

    this.gridView = {
      data: this.weatherData.slice(startIndex, endIndex),
      total: this.total_page,
    };
    console.log(this.total_page);
    console.log(endIndex);
    console.log(startIndex);
  }

  fetchWeatherData(skip, limit) {
    this.weatherService
      .fetchWeatherData(skip, limit)
      .subscribe((response: any) => {
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
            (error) => {
              console.log(error);
            }
          )),
            (this.skip = response.page);
          this.limit = response.limit;
          this.total_page = response.total;
          console.log(this.skip);
          console.log(this.limit);
          console.log(this.total_page);

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
