/**
 * Convert to BRL currency format
 * @param value - Pixels value to be converted
 * @returns Converter BRL string
 */

export function currencyConverter(value: number): string {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
