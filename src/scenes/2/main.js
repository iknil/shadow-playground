import { createShadowRoot } from '/libs/utils.js';

const root = document.getElementById('shadow-root');

createShadowRoot(root, '/scenes/2/sub.js');