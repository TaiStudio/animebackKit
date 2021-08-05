/*--------------------------------------------------------------------------------------\
|  _______    _    _____ _             _ _           ________     ___   ___ ___  __     |
| |__   __|  (_)  / ____| |           | (_)         /  ____  \   |__ \ / _ \__ \/_ |    |
|    | | __ _ _  | (___ | |_ _   _  __| |_  ___    /  / ___|  \     ) | | | | ) || |    |
|    | |/ _` | |  \___ \| __| | | |/ _` | |/ _ \  |  | |       |   / /| | | |/ / | |    |
|    | | (_| | |  ____) | |_| |_| | (_| | | (_) | |  | |___    |  / /_| |_| / /_ | |    |
|    |_|\__,_|_| |_____/ \__|\__,_|\__,_|_|\___/   \  \____|  /  |____|\___/____||_|    |
|                                                   \________/                          |
\--------------------------------------------------------------------------------------*/

class Window{
    constructor(file, url, width, height, frame, autoHideMenuBar, resize, nodeIntegration, skipTaskBar, iconFile, alwaysOnTop, BackgroundColor, transparent, pos){
        this.file = file;
        this.url = url;
        this.width = width;
        this.height = height;
        this.frame = frame;
        this.autoHideMenuBar = autoHideMenuBar;
        this.resize = resize;
        this.nodeIntegration = nodeIntegration;
        this.skipTaskBar = skipTaskBar;
        this.iconFile = iconFile;
        this.alwaysOnTop = alwaysOnTop;
        this.BackgroundColor = BackgroundColor;
        this.transparent = transparent;
        this.pos = pos;
    }

    /**
     * @param {string} file HTML FILE
     * @param {string} url Url link
     * @param {number} width width in px
     * @param {number} height height in px
     * @param {boolean} frame if `true` window has a default border
     * @param {boolean} autoHideMenuBar if `false` display menu bar |file|edit|quit|
     * @param {boolean} resize allow user resize the frame
     * @param {boolean} nodeIntegration add nodeIntegration
     * @param {boolean} skipTaskBar if `true` window is not display in task bar
     * @param {file} iconFile
     * @param {boolean} alwaysOnTop
     * @param {string} BackgroundColor
     * @param {boolean} transparent
     */
    createWindow = (file, url, width, height, frame, autoHideMenuBar, resize, nodeIntegration, skipTaskBar, iconFile, alwaysOnTop, BackgroundColor, transparent) => {
        file
        url
        width
        height
        frame
        autoHideMenuBar
        resize
        nodeIntegration
        skipTaskBar
        iconFile
        alwaysOnTop
        BackgroundColor
        transparent
    }
}

module.exports = Window();