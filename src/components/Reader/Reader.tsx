import React from 'react'
import HomeButton from '../core/HomeButton'
import Panel from '../core/Panel'
import useApp from '../store/useApp'

const Reader = () => {
  const [appStore] = useApp()
  const { logs } = appStore
  return (
    <div>
      <HomeButton />
      <div>
        {logs.map(item => {
          return <Panel key={item.id} content={item.content} date={item.date} />
        })}
      </div>
    </div>
  )
}

export default Reader
