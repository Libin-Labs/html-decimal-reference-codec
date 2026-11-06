export function encodeDecimalReferences(value: string): string {
  if (typeof value !== 'string') throw new TypeError('Expected text');
  return Array.from(value, (char) => '&#' + char.codePointAt(0) + ';').join('');
}
export function decodeDecimalReferences(value: string): string {
  if (typeof value !== 'string') throw new TypeError('Expected text');
  return value.replace(/&#(\d+);/g, (_, digits: string) => {
    const n = Number(digits);
    if (!Number.isInteger(n) || n < 0 || n > 0x10ffff || (n >= 0xd800 && n <= 0xdfff))
      throw new RangeError('Invalid Unicode scalar');
    return String.fromCodePoint(n);
  });
}
