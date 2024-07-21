import { createShadowRoot, getShadowDocument } from '/libs/utils.js';

// window.getShadowDocument = getShadowDocument; // 兼容seto
// window.createShadowRoot = createShadowRoot; // 兼容seto

import { BaseSandbox } from '/libs/seto.mjs';

setTimeout(() => {
    const mainRoot = document.getElementById('main-root');
    const { Button } = SemiUI;

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                sandbox: null
            };

        }

        create() {
            if (this.state.sandbox === null) {
                const sandbox = new BaseSandbox({});
                sandbox.createReady.then(() => {
                    sandbox.initIframe();
                });
                sandbox.ready.then(() => {
                    sandbox.loadScript('/scenes/3/wrapper.js');
                    this.setState({
                        sandbox,
                    });
                });
            }
        }

        destroy() {
            this.state.sandbox ? this.state.sandbox.destroy() : null; 
            this.setState({
                sandbox: null
            });
        }

        render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Button, { onClick: () => this.state.sandbox ? this.destroy() : this.create() }, this.state.sandbox ? '销毁' : '创建'),
                React.createElement('p', {}, '---')

            );
        }
    }

    ReactDOM.render(React.createElement(App, null), mainRoot);
}, 0);


