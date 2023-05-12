const isDataURL = (str: string) => {
  const regex =
    /^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i
  return !!str.match(regex)
}

export const loadImageURL = (imageURL: string, crossOrigin?: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = reject
    if (!isDataURL(imageURL)) {
      image.crossOrigin = 'Anonymous'
      console.log(`IMAGE CROSS ORIGIN ANONYMOUS')
    }
    image.src = imageURL
  })
