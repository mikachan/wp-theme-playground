import { render } from '@wordpress/element';

function MyPlugin() {
  return <span>Hello from JavaScript!</span>;
}

window.addEventListener(
  'load',
  function () {
    render(<MyPlugin />, document.querySelector('#my-plugin'));
  },
  false
);
