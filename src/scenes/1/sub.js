import { getShadowDocument } from '/libs/utils.js';

const originalDocument = document;
const shadowRoot = document.querySelector('#shadow-root').shadowRoot;

const root = document.createElement('div');
root.id = 'root';
shadowRoot.appendChild(root);

(function(document){
    const { Button, Toast } = SemiUI;

    class App extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return React.createElement(
            'div',
            null,
            React.createElement(Button, { onClick: () => Toast.info('hello world') }, 'hello world'),
            );
        }
    }

    ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
})(getShadowDocument(shadowRoot, originalDocument))