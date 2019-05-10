var React = require('react');
export default class Assembly extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    var self = this, datas = this.props.data.variants;
    var currstep=this.props.data.steps;
        return <div className="AssemblySection">
            <h2 className="sectionheader green">Assembly</h2>
            <div className="">
                <ul className="listnone">
                    {Object.keys(datas).map(function (data) {
                        if (data <= currstep) {
                            return (
                                <li key={datas[data].sku} className={datas[data].color}>
                                    <p className="type">{datas[data].type}</p>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>

        </div>;
    }
}