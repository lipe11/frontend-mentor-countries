export function compare(a, b) {
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0
}

export function extractUnique(array, property) {
  return [...new Set(array.map((e) => e[property]))]
}

export function extractNumber(number) {
  return number ? number.toLocaleString() : 'none'
}

export function extractString(string) {
  return string || 'none'
}

export function extractProperty(object, property) {
  if (!object) return ['none']
  return Object.values(object).map((value) => value[property])
}

export function extractValues(object) {
  if (!object) return ['none']
  return Object.values(object)
}
