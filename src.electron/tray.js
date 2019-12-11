const { Tray, ipcMain, remote, BrowserWindow } = require('electron')
const path = require('path')

function tray() {
  const iconPath = path.join(__dirname, '/icon/bear.ico')
  let tray = new Tray(iconPath)

  function showMainWindow() {
    const window = BrowserWindow.fromId(remote.getGlobal('globals').mainWindow)
    window.show()
  }

  const trayName = 'Arktica'
  const quitLabel = { label: '退出应用', type: 'radio', role: 'quit' }
  const showLabel = { label: '显示主窗口', role: 'redo', click: showMainWindow }

  tray.on('click', showMainWindow)
  tray.setToolTip(trayName)
  tray.setContextMenu([showLabel, quitLabel])

  // messages
  function changeIcon() {
    const iconPath = path.join(__dirname, '/icon/bear.ico')
    tray.setImage(iconPath)
  }
  
  ipcMain.on('message', changeIcon)
}

module.exports.tray = tray
