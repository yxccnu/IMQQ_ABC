const { ipcMain, BrowserWindow,Menu } = require('electron')
const path = require('path')
/**
 * 监听进入聊天界面ipcrender
 */
ipcMain.on('load-chatPage', (event, arg) => {
    console.log(arg, 'hello chat') // prints "ping"
    // 1·新建窗口
    chatWind = new BrowserWindow({
        width: 1000,
        height: 620,
        resizable: true,
        frame: false,
        center:true,
        hasShadow:true,
        transparent:true,
        webPreferences: {
            devTools: true,
            nodeIntegration: true, //开启页面的nodejs能力
        }
    });
    // 2·加载聊天界面
    chatWind.loadURL(path.join(__dirname, '../view/Chat/Single/index.html'))
    Menu.setApplicationMenu(null)
    chatWind.webContents.openDevTools()//打开调试窗口


})