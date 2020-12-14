export const CITY_BY_ID: Record<number, string> = {
  249758: 'Amstedam',
  308526: 'Madrid',
  187423: 'Budapest',
}

export const getIcon = (iconId: number) => {
  switch (iconId) {
    case 1:
    case 2:
    case 3:
    case 4:
      return 'wi-day-sunny'
    case 5:
    case 6:
    case 7:
    case 9:
    case 8:
      return 'wi-day-cloudy'
    case 11:
      return 'wi-day-fog'
    case 12:
    case 13:
    case 14:
      return 'wi-day-showers'
    case 15:
    case 16:
    case 17:
      return 'wi-day-thunderstorm'
    case 18:
      return 'wi-day-rain'
    case 19:
    case 20:
    case 21:
      return 'wi-day-windy'
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
      return 'wi-day-snow'
    default:
      break
  }
}
