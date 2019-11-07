// import styled from 'styled-components';
//
// export default styled.div`
//   align-items: stretch;
//   border-width: 0;
//   border-style: solid;
//   box-sizing: border-box;
//   display: flex;
//   flex-basis: auto;
//   flex-direction: column;
//   flex-shrink: 0;
//   margin: 0;
//   padding: 0;
//   position: relative;
//   min-height: 0;
//   min-width: 0;
// `;
import React from 'react';
import "./css/tailwindcss.css"

class View extends React.Component {
  render() {
    const props = this.props;
    const className = "items-stretch border-0 border-solid flex flex-col flex-shrink-0 m-0 p-0 relative min-h-0 min-w-0 flex-basis-0";
    return <div {...props} className={className} />;
  }
}
export default View;
// function View(props){
//   return (<div></div>);
//   return (<div className={className}>{props.children}</div>)
// }
// export default View();
