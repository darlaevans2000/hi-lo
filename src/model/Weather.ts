export interface Coordinates {
  lon: number;
  lat: number;
}

export interface State {
  level1long: string | undefined;
  level1short: string | undefined;
  level2long: string | undefined;
  level2short: string | undefined;
}

export interface WeatherLocation {
  id: number;
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    }
  ];
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
}

export interface Forecast {
  lat: number;
  lon: number;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    humidity: number;
    uvi: number;
    wind_speed: number;
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
  };
  hourly: [
    {
      dt: number;
      temp: number;
      weather: [
        {
          icon: string;
        }
      ];
    },
    {
      dt: number;
      temp: number;
      weather: [
        {
          icon: string;
        }
      ];
    },
    {
      dt: number;
      temp: number;
      weather: [
        {
          icon: string;
        }
      ];
    },
    {
      dt: number;
      temp: number;
      weather: [
        {
          icon: string;
        }
      ];
    },
    {
      dt: number;
      temp: number;
      weather: [
        {
          icon: string;
        }
      ];
    }
  ];
  daily: [
    {
      dt: number;
      temp: {
        min: number;
        max: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
    },
    {
      dt: number;
      temp: {
        min: number;
        max: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
    },
    {
      dt: number;
      temp: {
        min: number;
        max: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
    },
    {
      dt: number;
      temp: {
        min: number;
        max: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
    },
    {
      dt: number;
      temp: {
        min: number;
        max: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
    }
  ];
}

export interface DailyForecast {
  daily: [
    {
      dt: number;
      temp: {
        min: number;
        max: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
    },
    {
      dt: number;
      temp: {
        min: number;
        max: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
    },
    {
      dt: number;
      temp: {
        min: number;
        max: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
    }
  ];
}
