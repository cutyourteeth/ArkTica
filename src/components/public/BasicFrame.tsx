import React from 'react'
import styled from 'styled-components'
import HomeButton from '../core/HomeButton'

const BasicFrame = (props: React.ReactNode) => {
  return (
    <div>
      <Header>
        <HomeButton />
        你可在此载入本地的日志
      </Header>
      {props}
    </div>
  )
}
export default BasicFrame

const Header = styled.div`
  /* background: linear-gradient(15deg, #d33f34 50%, #a61322 50.1%); */
  background: white;
  height: 500px;
  padding: 50px auto;
  background-size: 100% auto;
`
