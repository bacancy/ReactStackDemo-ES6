var React = require('react');
export default class Info extends React.Component{

  constructor(props) {
        super(props);
  }

  render(){
    var data = this.props.data;
    var currstep=this.props.data.steps;
    return <div className="InfoSection">
          <ul className="infodata">
            <li className="Name">{data.name}</li>
            <li className="Title">{data.title}</li>
            <li className="Description">{data.variants[currstep].description}</li>
          </ul>
        </div>;
  }
}
