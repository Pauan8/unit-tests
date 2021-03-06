export const hackerSpeak = (words) => { 

  const letterArray = [/a|A/, /e|E/, /i|I/, /o|O/, /s|S/]
  const numberArray = ["4", "3", "1", "0", "5"]
  for (let i = 0; letterArray.length > i; i++) {
    words = words.split(letterArray[i]).join(numberArray[i])
  }
  return words
}



