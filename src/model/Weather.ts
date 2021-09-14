export interface Coordinates {
  lon: number;
  lat: number;
}

export interface WeatherLocation {
  city: {
    coord: Coordinates;
    id: number;
    name: string;
  }
}