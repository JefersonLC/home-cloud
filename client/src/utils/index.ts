export function endsWithSlash(path: string) {
  return /\/$/.test(path)
}
