import React from 'react';
import "./css/tailwindcss.css"
const getColor = color => {
  switch (color) {
    case 0:
      return 'bg-yellow-600';
    case 1:
      return 'bg-black-600';
    case 2:
      return 'bg-purple-600';
    case 3:
      return 'bg-blue-400';
    case 4:
      return 'bg-orange-900';
    case 5:
      return 'bg-teal-900';
    default:
      return 'bg-transparent';
  }
};

// export default styled(View)`
//   align-self: flex-start;
//   flex-direction: ${props => (props.layout === 'column' ? 'column' : 'row')};
//   padding: ${props => (props.outer ? '4px' : '0')};
//   ${props => props.fixed && 'height:6px;'}
//   ${props => props.fixed && 'width:6px;'}
//   background-color: ${props => getColor(props.color)};
// `;


// function Box(props) {
//   const VclassName = "items-stretch border-0 border-solid flex flex-col flex-shrink-0 m-0 p-0 relative min-h-0 min-w-0";
//   let className = `${VclassName} self-start`;
//   className += (props.layout === 'column' ? ' flex-col' : ' flex-row');
//   className += (props.outer ? ' p-1' : ' p-0');
//   className += (props.fixed ? ' h-1' : ' h-0');
//   className += (props.fixed ? ' w-1' : ' w-0');
//   className += " " + getColor(props.color);
//   return (
//     <div
//       className={className}
//     >{props.children}</div>
//   );
// }

class Box extends React.Component {
  constructor(props) {
    super(props);
    const VclassName = "items-stretch border-0 border-solid flex flex-shrink-0 m-0 p-0 relative min-h-0 min-w-0 flex-basis-0";
    let className = `${VclassName} self-start`;
    className += (props.layout === 'column' ? ' flex-col' : ' flex-row');
    className += (props.outer ? ' p-1' : ' p-0');
    className += (props.fixed ? ' h-1' : '');
    className += (props.fixed ? ' w-1' : '');
    className += " " + getColor(props.color);
    this.className = className;
  }

  render() {
    const props = this.props;
    return (
      <div
        {...props}
        className={this.className}
      />)

  }
}
export default Box;
