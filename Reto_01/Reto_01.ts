console.log("Reto 01: La posesion del codigo")

function translatePossessed (message: string): string {
  if (message.trim() === '') return ''
  const words = message.split(' ')
  const translatedWords = words.map(word => word.split('').reverse().join(''))
  return translatedWords.join(' ')
}

const message = 'i yojne gnihctaw uoy'

console.log(translatePossessed(message))

console.log(translatePossessed(message).length)