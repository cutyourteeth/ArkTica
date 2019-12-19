import { Button } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const HomeButton = () => {
  const history = useHistory()
  const back = () => {
    history.push('/')
  }
  return <ButtonWrapper onClick={back}>back</ButtonWrapper>
}

export default HomeButton

const ButtonWrapper = styled(Button)`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.6);
  background: rgba(255, 255, 255, 0.1);
  border: none;
`
