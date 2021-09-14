export interface WeatherLocation { 
  id: number;
  name: string;
  coord: {
      lon: number;
      lat: number;
  };
  weather: [{
    description: string;
    icon: string;
    id: number;
    main: string;
  }];
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  }
}