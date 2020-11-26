const { ipcMain, BrowserWindow } = require('electron')
const path = require('path')
var mainWind = BrowserWindow.fromId(1)




/**
 * 监听登录ipcrender
 */
ipcMain.on('load-mainpage', (event, arg) => {
    console.log(arg, 'hello father') // prints "ping"
        // 调整窗口大小和位置
        mainWind.setResizable(true)
        mainWind.setMinimumSize(360,735)
        mainWind.setMaximumSize(760,1600)
        mainWind.setSize(360,800)
        mainWind.setPosition(500,0,true)
        // 加载主页面

        mainWind.loadURL(path.join(__dirname, '../view/MainPage/index.html'))


})