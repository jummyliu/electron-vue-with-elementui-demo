import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'

if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow = null

const winURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8080'
  : `file://${path.join(__dirname, 'index.html')}`

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    useContentSize: true,
    show: false,
    frame: false, // 隐藏窗口外壳
    webPreferences: {
      nodeIntegration: true // 允许在页面调用 node api
    }
  })
  mainWindow.loadURL(winURL)

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    mainWindow.webContents.send('isMaximized', mainWindow.isMaximized())
  })

  process.env.NODE_ENV === 'development' && mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.on('maximize', () => {
    mainWindow.webContents.send('isMaximized', true)
  })

  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.send('isMaximized', false)
  })
}

app.on('ready', createWindow)

app.on('window-all-closwd', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('minimize', () => {
  if (mainWindow) {
    mainWindow.minimize()
  }
})

ipcMain.on('maximize', () => {
  if (mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize()
    } else {
      mainWindow.maximize()
    }
  }
})

ipcMain.on('close', () => {
  if (mainWindow) {
    mainWindow.close()
  }
})
