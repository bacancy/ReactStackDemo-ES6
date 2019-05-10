var React = require('react');
var CodeMirror = require('react-codemirror');
var CodeStore = require('../stores/CodeStore');

export default class CodeMaster extends React.Component{
  constructor(props) {
        super(props);
        this.state = {code:this.props.data.code};
      this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    CodeStore.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    CodeStore.removeChangeListener(this.handleChange);
  }

  handleChange(){
    var prevstep=this.props.data.steps;
    var currstep=this.props.data.steps;
    var selected=this.props.selected;
    for (var i = 0; i <this.props.data.totalsteps; i++) {
      for(var j=this.props.data.variants[i].lineno.from;j<=this.props.data.variants[i].lineno.to;j++){
        this.refs.codemirror.getCodeMirror().doc.removeLineClass(j, "", this.props.data.variants[i].color+'code');
      }
    }
    if(this.props.data.variants[prevstep]!==undefined && this.props.data.variants[prevstep].lineno.from>=0){
      for (var p = this.props.data.variants[prevstep].lineno.from; p <= this.props.data.variants[prevstep].lineno.to;p++) {
        this.refs.codemirror.getCodeMirror().doc.addLineClass(p, "", this.props.data.variants[prevstep].color+'code');
      }
    }
  }

  render() {
      return <div className="CodeMain">
          <h2 className="sectionheader blue">Code</h2>
          <div className="Codesection">
              <CodeMirror ref="codemirror"
                          onChange={this.handleChange}
                          options={{
                              lineNumbers: true,
                              mode: 'clike',
                              readOnly: true,
                              highlightMatches: true,
                              matchBrackets: true,
                          }}
                          value={this.state.code}
              />
          </div>
      </div>;
  }
}