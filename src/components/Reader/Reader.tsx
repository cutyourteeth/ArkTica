import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import databaseExecutors from '../../database'
import { FullDiary } from '../../interface/database.interface'
import DiaryUnit from './DiaryUnit'

const Reader = () => {
const [diaries, setDiaries] = useState<FullDiary[]>([])
  useEffect(() => {
    setDiaries(databaseExecutors.load('diaries'))
  }, [])

  return (
    <ReaderWrapper>
      <div>
        {diaries.map((diary) => (
          <DiaryUnit key={diary.id} diary={diary} />
        ))}
      </div>
    </ReaderWrapper>
  )
}

export default Reader

const ReaderWrapper = styled.div`
  background: white;
`
