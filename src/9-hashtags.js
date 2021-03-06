export const hashtags = (text) => {
  text = text.split(" ")
  text = text.filter((word) => word.includes("#"))
  return text
}
