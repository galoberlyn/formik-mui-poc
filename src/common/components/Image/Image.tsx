import { FunctionComponent, ImgHTMLAttributes } from "react"

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  isSelect?: boolean
}

export const Image: FunctionComponent<ImageProps> = ({ isSelect, src, alt }) => {

  const styles = { width: '12%', marginRight: 10 }

  return (
    <img src={src} alt={alt} style={isSelect ? styles : {}} />
  )
}