import { insertScript, insertStyle } from "./utils.js";

const REACT_JS = "https://unpkg.com/react@17.0.2/umd/react.production.min.js";
const REACT_DOM_JS = "https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js";

const SEMI_JS = "https://unpkg.com/@douyinfe/semi-ui@2.27.0/dist/umd/semi-ui.min.js";
const SEMI_ICON_JS = "https://unpkg.com/@douyinfe/semi-icons@latest/dist/umd/semi-icons.min.js";
const SEMI_CSS = "https://unpkg.com/@douyinfe/semi-ui@2.27.0/dist/css/semi.css";
const SEMI_ICON_CSS = "https://unpkg.com/@douyinfe/semi-icons@latest/dist/css/semi-icons.css";


// 插入必要资源
insertScript(REACT_JS);
insertScript(REACT_DOM_JS);

insertScript(SEMI_JS);
insertScript(SEMI_ICON_JS);
insertStyle(SEMI_CSS);
insertStyle(SEMI_ICON_CSS);

// 插入返回菜单
const root = document.getElementById('shadow-root');
const returnMenu = document.createElement('div');
returnMenu.innerHTML = '<a href="/"><返回</a>';
document.querySelector('body').insertBefore(returnMenu, document.querySelector('h1'));