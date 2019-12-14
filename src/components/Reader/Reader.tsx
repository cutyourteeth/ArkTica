import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import databaseExecutors from '../../database'
import { FullDiary } from '../../interface/database.interface'
import HomeButton from '../core/HomeButton'
import DiaryUnit from './DiaryUnit'


const Reader = () => {
  const [diaries,setDiaries]=useState<FullDiary[]>([])
  useEffect(() =>{
    setDiaries( databaseExecutors.load('diaries'))
  },[])


  return (
    <div>
      <HomeButton />
      你可在此载入本地的日志

      <Button>Load local diaries</Button>
      
      <div>
        {diaries.map(diary=>(<DiaryUnit key={diary.id} diary={diary} />))}
      </div>
    </div>
  )
}

export default Reader
