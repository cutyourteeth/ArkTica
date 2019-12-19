import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import databaseExecutors from '../../database'
import { FullDiary } from '../../interface/database.interface'
import HomeButton from '../core/HomeButton'
import DiaryUnit from './DiaryUnit'

const Reader = () => {
  const [diaries, setDiaries] = useState<FullDiary[]>([])
  useEffect(() => {
    setDiaries(databaseExecutors.load('diaries'))
  }, [])

  return (
    <ReaderWrapper>
      <div className="reader-header">
        <HomeButton />
        你可在此载入本地的日志
        <Button>Load local diaries</Button>
      </div>

      <div>
        {diaries.map(diary => (
          <DiaryUnit key={diary.id} diary={diary} />
        ))}
      </div>
    </ReaderWrapper>
  )
}

export default Reader

const ReaderWrapper = styled.div`
  /* background: linear-gradient(15deg, #d33f34 50%, #a61322 50.1%); */
  background: white;
  .reader-header {

    height: 500px;
    padding: 50px auto;
    background: url(https://raw.githubusercontent.com/hudsonmarinho/header-and-footer-parallax-effect/master/assets/images/bg-header.jpg) 50% 50%
      no-repeat;
    background-size: 100% auto;
  }
`
