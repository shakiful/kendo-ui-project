import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) {}


  fetchWeatherData(page: number, limit: number): Observable<any> {
    const apiUrl = `${environment.apiUrl}/api/weather/paginated`;

    // Send the API request with the params
    return this.http.get<any>(`${apiUrl}?page=${page}&limit=${limit}`);

  }

}
