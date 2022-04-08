type Weather = {
  main: string;
};

type Main = {
  temp: number;
};

export type WeatherExternal = {
  weather: Weather[];
  main: Main;
  name: string;
};
