import View from './View';
import React from 'react';
import "./css/tailwindcss.css"
// function Provider(props) {
//   return (<div></div>);
//   return (<div className="items-stretch border-0 border-solid flex flex-col flex-shrink-0 m-0 p-0 relative min-h-0 min-w-0">{props.children}</div>);
// }

class Provider extends React.Component {
  render() {
    const props = this.props;
    return (<div {...props} className="items-stretch border-0 border-solid flex flex-col flex-shrink-0 m-0 p-0 relative min-h-0 min-w-0 flex-basis-0"/>);
  }
}
export default Provider;
