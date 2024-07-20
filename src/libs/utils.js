export const insertScript = (src) => {
  const script = document.createElement('script');
  script.src = src;
  document.body.appendChild(script);
}

export const insertStyle = (href) => {
  const link = document.createElement('link');
  link.rel ='stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

/**
 * 检查是否为样式节点
 * @param {Node, [Node]} targets 
 * @returns 
 */
function isStyleTarget(targets) {
  let list = Array.isArray(targets) ? targets : [targets];
  
  for (let i = 0; i < list.length; i ++) {
    if (['STYLE', 'LINK'].indexOf(list[i].nodeName) !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * 同步样式
 * @param {Node} root 
 */
function syncStyle(root) {
  const styles = document.querySelectorAll('link, style');
  root.innerHTML = '';
  styles.forEach(item => root.appendChild(item.cloneNode(true)));
}

/**
 * 1. 创建shadow host
 * 2. 复制外部style
 * 3. 监听并同步外部style
 * 4. 注入入口javascript
 */
export const createShadowRoot = (host, entry) => {
  host.attachShadow({ mode: 'open' });
  const shadowRoot = host.shadowRoot;

  // append style root
  const styleDiv = document.createElement('div');
  styleDiv.id = '__style__';
  shadowRoot.appendChild(styleDiv);

  // append style root
  const scriptDiv = document.createElement('div');
  scriptDiv.id = '__script__';
  shadowRoot.appendChild(scriptDiv);

  // 需要在沙箱运行
  // 沙箱里面定制化document行为
  const entryScript = document.createElement('script');
  entryScript.src = entry;
  entryScript.type = 'module'
  shadowRoot.appendChild(entryScript);

  // 复制所有样式文件
  syncStyle(styleDiv);

  // 持续监听样式变化
  const styleObserver = new MutationObserver((mutations) => {
    let flag = false;
    for (let i = 0; i < mutations.length; i++) {
      const item = mutations[i];
      if (isStyleTarget(item.target) 
      || isStyleTarget(item.addedNodes) 
      || isStyleTarget(item.removedNodes)) {
        flag = true;
        break;
      }
    }

    if (flag) {
      syncStyle(styleDiv);
    }
  });

  styleObserver.observe(document.querySelector('html') , {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
  });
}

export const getShadowDocument = (shadowRoot, originalDocument) => {
  const proxyActions = ['appendchild'];

  return new Proxy(originalDocument, {
    get: (target, key) => {
      if (proxyActions.includes(key) === -1) {
        return target[key].bind(target);
      }
      return shadowRoot[key].bind(shadowRoot);
    }
  });
}