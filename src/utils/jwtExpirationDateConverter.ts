/**
 * Convert JWT exp in Days
 * @param exp - Number to be converted
 * @returns Converted exp in Days
 */

export function jwtExpirationDateConverter(exp: number): number {
  const currentTime = Math.floor(Date.now() / 1000)
  const secondsUntilExpiration = exp - currentTime
  const secondsInADay = 60 * 60 * 24
  const daysUntilExpiration = secondsUntilExpiration / secondsInADay
  return daysUntilExpiration
}
