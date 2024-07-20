import { createShadowRoot } from '/libs/utils.js';

const root = document.getElementById('shadow-root');

createShadowRoot(root, '/scenes/1/sub.js');