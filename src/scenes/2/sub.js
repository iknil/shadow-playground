import { getShadowDocument } from '/libs/utils.js';

const originalDocument = document;
const shadowRoot = document.querySelector('#shadow-root').shadowRoot;

const root = document.createElement('div');
root.id = 'root';
shadowRoot.appendChild(root);

(function(document){
    const { Button, Toast } = SemiUI;

    
})