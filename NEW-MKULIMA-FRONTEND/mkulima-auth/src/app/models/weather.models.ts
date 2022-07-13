

export interface WeatherData {
    lat: string
    lon: string
    elevation: number
    timezone: string
    units: string
    current: Current
    hourly: Hourly
    daily: Daily
  }
  
  export interface Current {
    icon: string
    icon_num: number
    summary: string
    temperature: number
    wind: Wind
    precipitation: Precipitation
    cloud_cover: number
  }
  
  export interface Wind {
    speed: number
    angle: number
    dir: string
  }
  
  export interface Precipitation {
    total: number
    type: string
  }
  
  export interface Hourly {
    data: Daum[]
  }
  
  export interface Daum {
    date: string
    weather: string
    icon: number
    summary: string
    temperature: number
    wind: Wind2
    cloud_cover: CloudCover
    precipitation: Precipitation2
  }
  
  export interface Wind2 {
    speed: number
    dir: string
    angle: number
  }
  
  export interface CloudCover {
    total: number
  }
  
  export interface Precipitation2 {
    total: number
    type: string
  }
  
  export interface Daily {
    data: Daum2[]
  }
  
  export interface Daum2 {
    day: string
    weather: string
    icon: number
    summary: string
    all_day: AllDay
    morning: any
    afternoon: any
    evening: any
  }
  
  export interface AllDay {
    weather: string
    icon: number
    temperature: number
    temperature_min: number
    temperature_max: number
    wind: Wind3
    cloud_cover: CloudCover2
    precipitation: Precipitation3
  }
  
  export interface Wind3 {
    speed: number
    dir: string
    angle: number
  }
  
  export interface CloudCover2 {
    total: number
  }
  
  export interface Precipitation3 {
    total: number
    type: string
  }
  