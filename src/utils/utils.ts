export function cleanClassName(className: string): string {
  return className.replace(' ', '-').toLowerCase()
}
