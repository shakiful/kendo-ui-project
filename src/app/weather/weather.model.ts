export interface WeatherData {
  id: number;
  weatherType: string;
  icon: string;
  temp: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  pressure: number;
  humidity: number;
  visibility: number;
  windSpeed: number;
  windDeg: number;
  clouds: number;
  dt: string;
  createdAt: string;
}
