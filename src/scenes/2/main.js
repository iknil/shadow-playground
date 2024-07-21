import { createShadowRoot } from '/libs/utils.js';

const shadowRoot = document.getElementById('shadow-root');

createShadowRoot(shadowRoot, '/scenes/2/sub.js');

setTimeout(() => {
    const mainRoot = document.getElementById('main-root');
    const { Button } = SemiUI;
    const commonStyle = document.getElementById('common-style');

    function changeTextStyle(color) {
        commonStyle.innerHTML = `
       .common-text {
            color: ${color};
        }
        `;
    }

    class App extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Button, { onClick: () => changeTextStyle('black') }, 'black'),
                React.createElement(Button, { onClick: () => changeTextStyle('red') }, 'red'),
                React.createElement(Button, { onClick: () => changeTextStyle('green') }, 'green'),
                React.createElement(Button, { onClick: () => changeTextStyle('blue') }, 'blue'),
                React.createElement('p', { className: 'common-text' }, 'text outside shadow-root'),
            );
        }
    }

    ReactDOM.render(React.createElement(App, null), mainRoot);
}, 0);