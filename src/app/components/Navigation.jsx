var React = require('react');
var AssemblyActions = require('../actions/AssemblyActions');
export default class Navigation extends React.Component{
  constructor(props) {
    super(props);
    this.state = {step:0};
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.addData = this.addData.bind(this);
    this.removeData = this.removeData.bind(this);
  }
  componentDidMount() {
    this.setState({step:this.state.step});
  }
  componentWillUnmount() {
    this.setState({step:0});
  }
  nextStep() {
    this.props.data.steps=this.props.data.steps+1;
    this.setState({step:this.state.step+1});
  }
  prevStep() {
    this.props.data.steps=this.props.data.steps-1;
    this.setState({step:this.state.step-1});
  }
  addData() {
    this.nextStep();
    AssemblyActions.selectData(this.state.step);
    var update = {
      name: this.props.data.name,
    };
    AssemblyActions.addData(this.state.step, update);
  }
  removeData() {
    this.prevStep();
    AssemblyActions.selectData(this.state.step);
    AssemblyActions.removeData(this.state.step);
  }

  render() {
    return <div className="NavigateSection">
      <div>
        <div className="NavigationBtn">

          <button type="button" onClick={this.removeData} disabled={this.state.step > 0 ? '' : 'disabled'}>
            {this.state.step > 0 ? 'Prew' : 'Prew'}
          </button>

          <button  type="button" onClick={this.addData} disabled={this.state.step >2  ? 'disabled' : ''}>
            {this.state.step > 0 ? 'Next' : 'Start'}
          </button>
        </div>
      </div>
    </div>;
  }
}

