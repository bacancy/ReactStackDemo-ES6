var React = require('react');
var AssemblyActions = require('../actions/AssemblyActions');

class StackMemory extends React.Component{
  constructor(props) {
        super(props);
        this.state = {data:this.props.data};
  }

  render() {
    return <div className="stackstaticbox">
          {this.state.data}
        </div>;
  }
}

export default class Stack extends React.Component{
  constructor(props) {
        super(props);
  }

  render() {
    var currstep=this.props.data.steps;
    var variants=this.props.data.variants;
    return <div className="StackSection">
      <h2 className="sectionheader">Stack</h2>
      <div className="StackTop">
        <ul>
          {Object.keys(variants).map(function (variant) {
            if(variant<=currstep && variant!=0){
              var color='stackbox '+variants[variant].color;
              return (
                <li className="stackcontainer" key={variants[variant].sku}>
                  <p className="stackheader">[{variants[variant].stack.tag}]</p>
                  <p className={color}>{variants[variant].stack.execution}</p>
                </li>
              )
            }
          })}
      </ul>
      </div>
      <div className="StackMiddle">
        <StackMemory data="0xbffff6c8"/>
        <StackMemory data="0xbffff6c8"/>
        <StackMemory data="0xbffff6cc"/>
        <StackMemory data="0xbffff6d0"/>
        <StackMemory data="0xbffff6d4"/>
        <StackMemory data="0xbffff6d8"/>
      </div>
      <div className="StackBottom">
      </div>
    </div>;
  }
}