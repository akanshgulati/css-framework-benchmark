import View from './View';
import React from 'react';
import "./css/tailwindcss.css"
// export default styled(View).attrs(p => ({ style: { borderBottomColor: p.color } }))`
//   position: absolute;
//   cursor: pointer;
//   width: 0;
//   height: 0;
//   border-color: transparent;
//   border-style: solid;
//   border-top-width: 0;
//   transform: translate(50%, 50%);
//   margin-left: ${props => `${props.x}px`};
//   margin-top: ${props => `${props.y}px`};
//   border-right-width: ${props => `${props.size / 2}px`};
//   border-bottom-width: ${props => `${props.size / 2}px`};
//   border-left-width: ${props => `${props.size / 2}px`};
// `;
// function Dot(props){
//   let className = `${"items-stretch border-0 border-solid flex flex-col flex-shrink-0 m-0 p-0 relative min-h-0 min-w-0"} + absolute w-0 h-0 pointer border-solid border-transparent translate-x-1/2 translate-y-1/2`;
//   return (<div></div>);
//   return (<div style={{
//     borderBottomColor: color,
//     borderRightWidth: `${props.size / 2}px`,
//     borderBottomWidth: `${props.size / 2}px`,
//     borderLeftWidth: `${props.size / 2}px`,
//     marginLeft: `${props.x}px`,
//     marginTop: `${props.y}px`
//   }} className={className}>{props.children}</div>);
// }


class Dot extends React.Component {
  constructor(props){
    super(props);
    this.className = `${"items-stretch border-0 border-solid flex flex-col flex-shrink-0 m-0 p-0 relative min-h-0 min-w-0 flex-basis-0"} + absolute w-0 h-0 pointer border-solid border-transparent translate-x-1/2 translate-y-1/2`;
  }
  render() {
    const props = this.props;
    return (<div
      style={{
        borderBottomColor: props.color,
        borderRightWidth: `${props.size / 2}px`,
        borderBottomWidth: `${props.size / 2}px`,
        borderLeftWidth: `${props.size / 2}px`,
        marginLeft: `${props.x}px`,
        marginTop: `${props.y}px`
      }}
      {...props} className={this.className}/>);
  }
}
export default Dot;


