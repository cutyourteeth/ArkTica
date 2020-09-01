import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
interface Background {
  [key: string]: string
}

interface Props {}

const backgrounds: Background = {
  light: 'https://raw.githubusercontent.com/hudsonmarinho/header-and-footer-parallax-effect/master/assets/images/bg-header.jpg',
  dark: 'https://raw.githubusercontent.com/hudsonmarinho/header-and-footer-parallax-effect/master/assets/images/bg-header.jpg'
}

const Background = () => {
  const [image, setImage] = useState('')
  const randomBackground = useCallback(() => {
    const keys = Object.keys(backgrounds)
    const top = keys.length - 1
    const index = Math.floor(Math.random() * top)
    const key = keys[index] as keyof Background
    setImage(backgrounds[key])
  }, [])

  const Wrapper = styled.div`
    height: 500px;
    padding: 50px auto;
    background: url(${image}) 50% 50% no-repeat;
    background-size: 100% auto;
  `
  return <Wrapper />
}
export default Background
