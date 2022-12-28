export function getRoute(swapiApiUrl: string): string {
  return swapiApiUrl.split('https://swapi.dev/api')[1]
}

export function printableRoute(swapiApiUrl: string): string {
  const route = getRoute(swapiApiUrl)
  return route
    .split('/')
    .filter((part) => Boolean(part))
    .join('/')
}
