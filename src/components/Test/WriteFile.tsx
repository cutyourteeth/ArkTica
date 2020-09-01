import React from 'react'

const electron = window.require('electron')
const { app, ipcRenderer, ipcMain } = electron


export const WriteFile = () => {
  const writeFile = () => {
    const url = 'http://47.100.250.103:9007/api/defect/packet/93/'
    
    ipcRenderer.send("download");

  }



  return (
    <div>
      <button onClick={writeFile}>lukas</button>
    </div>
  )
}
