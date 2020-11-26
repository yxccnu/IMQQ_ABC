// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')
var mainWindow = null;

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // and load the index.html of the app.
    // mainWindow.loadFile('index.html')
    mainWindow.loadFile(path.join(__dirname, '/view/Signin/index.html'))

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}


app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 535,
        height: 420,
        resizable: false,
        frame: false,
        transparent:true,
        webPreferences: {
            devTools: true,
            nodeIntegration: true, //开启页面的nodejs能力
        }

    });
    mainWindow.webContents.openDevTools()//打开调试窗口
    mainWindow.loadURL(path.join(__dirname, '/view/Signin/index.html'))
    // 引入ipc
    require('./ipcMain/ipc_Login')








    mainWindow.on('closed', function() {
        mainWindow = null;
    });
})


app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.exit()
    }
})
app.on('activate', function() {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
    // Quit when all windows are closed, except on macOS. There, it's common
    // for applications and their menu bar to stay active until the user quits
    // explicitly with Cmd + Q.
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.