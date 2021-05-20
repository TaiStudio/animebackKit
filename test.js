/*--------------------------------------------------------------------------------------\
|  _______    _    _____ _             _ _           ________     ___   ___ ___  __     |
| |__   __|  (_)  / ____| |           | (_)         /  ____  \   |__ \ / _ \__ \/_ |    |
|    | | __ _ _  | (___ | |_ _   _  __| |_  ___    /  / ___|  \     ) | | | | ) || |    |
|    | |/ _` | |  \___ \| __| | | |/ _` | |/ _ \  |  | |       |   / /| | | |/ / | |    |
|    | | (_| | |  ____) | |_| |_| | (_| | | (_) | |  | |___    |  / /_| |_| / /_ | |    |
|    |_|\__,_|_| |_____/ \__|\__,_|\__,_|_|\___/   \  \____|  /  |____|\___/____||_|    |
|                                                   \________/                          |
\--------------------------------------------------------------------------------------*/

const extensionKIT = require('./index');

module.exports = {
    main(ExtensionAPI) {
        // ExtensionAPI["ExtensionKit"].wallpaperExtend(`
        //     <div style="position: absolute;top: 1%;left:0.5%;z-index:999;width: 15%;border: white 2px solid;border-radius: 10px;overflow: hidden;text-align: center;" class="totalpercent"><div class="bar"></div><p style="margin: 2.5%">0%</p></div>
        // `, extensionConfig.name);
        extensionKIT.createWindow(cc, cc, c, c, c, c, c, c, c, c, c,c, c, )
    }
}