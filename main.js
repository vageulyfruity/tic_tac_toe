const { app , BrowserWindow}=require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width:400,
        height:400,
        resizable:false
    });
    win.setMenu(null);
    win.loadFile('index.html');
}

app.whenReady().then(createWindow);