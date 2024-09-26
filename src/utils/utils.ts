export function cleanClassName(className: string): string {
  return className.replace(' ', '-').toLowerCase()
}

export function modifierFromLevel(level: number): number {
  return Math.floor((level - 10) / 2)
}
