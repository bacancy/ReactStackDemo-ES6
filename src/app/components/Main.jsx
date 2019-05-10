var React = require('react');
var AssemblyStore = require('../stores/AssemblyStore');
var CodeStore = require('../stores/CodeStore');
import Assembly from './Assembly.jsx';
import CodeMaster from './Code.jsx';
import Info from './Info.jsx';
import Navigation from './Navigation.jsx';
import Stack from './Stack.jsx';
export default class App extends React.Component{

  constructor(props) {
        super(props);
        this.state = {data: CodeStore.getData(),
            selectedProduct: CodeStore.getSelected(),
            stepData: AssemblyStore.getData()};
      this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    CodeStore.addChangeListener(this._onChange);
    AssemblyStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    CodeStore.removeChangeListener(this._onChange);
    AssemblyStore.removeChangeListener(this._onChange);
  }

  render() {
    return <div className="reactApp">
        <Info data={this.state.data} />
        <CodeMaster data={this.state.data} stepdata={this.state.stepData} selected={this.state.selectedProduct}/>
        <Assembly datas={this.state.stepData} data={this.state.data} />
        <Navigation data={this.state.data} stepdata={this.state.stepData} selected={this.state.selectedProduct}/>
        <Stack data={this.state.data} stepdata={this.state.stepData}  selected={this.state.selectedProduct}/>
    </div>;
  }

  _onChange() {
    this.setState({
        data: CodeStore.getData(),
        selectedProduct: CodeStore.getSelected(),
        stepData: AssemblyStore.getData()
     });
  }
}