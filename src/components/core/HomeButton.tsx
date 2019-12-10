import { Button } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

const HomeButton = () => {
  const history = useHistory()
  const back = () => {
    history.push('/')
  }
  return <Button onClick={back}>back</Button>
}

export default HomeButton

