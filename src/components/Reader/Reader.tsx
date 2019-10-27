import React from 'react'
import Panel from '../core/Panel'
import useApp from '../store/useApp'

const Reader = () => {
  const [appStore,]=useApp()
  console.log(appStore);
  
  return (
    <div>
      {appStore.logs.map(item => {
        return <Panel key={item.id} content={item.content} date={item.date} />
      })}
    </div>
  )
}

export default Reader
