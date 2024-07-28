import { createShadowRoot } from '/libs/utils.js';

const shadowRoot = document.getElementById('shadow-root');

createShadowRoot(shadowRoot, '/scenes/2/sub.js');

setTimeout(() => {
    const mainRoot = document.getElementById('main-root');
    const { Button } = SemiUI;
    let commonStyle = document.getElementById('common-style');
    let originalStyle = document.querySelectorAll('link, style');

    function changeTextStyle(color) {
        commonStyle.innerHTML = `
       .common-text {
            color: ${color};
        }
        `;
    }

    function getRandomStyle() {
        const style = document.createElement('style');
        style.innerHTML = `
       .common-text {
            color: ${['black', 'red', 'green', 'blue'][Math.floor(Math.random()*4)]};
        }
        `;
        return style;
    }

    function appendTextStyle() {
        const style = getRandomStyle();
        document.querySelector('head').appendChild(style);
    }

    function insertBeforeTextStyle() {
        const style = getRandomStyle();
        if (originalStyle[0]) {
            document.querySelector('head').insertBefore(style, originalStyle[0]);

        } else {
            document.querySelector('head').appendChild(style);
        }
    }

    function resetTextStyle() {
        document.querySelectorAll('link, style').forEach(item => {
            item.remove();
        });
        const head = document.querySelector('head');
        originalStyle.forEach(item => {
            head.appendChild(item.cloneNode(true));
        });

        originalStyle = document.querySelectorAll('link, style');
        commonStyle = document.getElementById('common-style');
    }

    function randomInsertTextStyle() {
        const style = getRandomStyle();
        const head = document.querySelector('head');
        const index = Math.floor(Math.random() * originalStyle.length);
        head.insertBefore(style, originalStyle[index]);
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
                React.createElement(Button, { onClick: () => appendTextStyle('blue') }, 'append style'),
                React.createElement(Button, { onClick: () => insertBeforeTextStyle('blue') }, 'insert style before'),
                React.createElement(Button, { onClick: () => randomInsertTextStyle('blue') }, 'random insert'),
                React.createElement(Button, { onClick: () => resetTextStyle('blue') }, 'reset style'),
                React.createElement('p', { className: 'common-text' }, 'text outside shadow-root'),
            );
        }
    }

    ReactDOM.render(React.createElement(App, null), mainRoot);
}, 0);