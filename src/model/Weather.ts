export interface WeatherLocation { 
  id: number;
  name: string;
  coord: {
      lon: number;
      lat: number;
  };
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  }
}