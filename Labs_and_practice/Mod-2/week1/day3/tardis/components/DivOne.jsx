class DivOne extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <DivTwo name={this.props.name} caps={this.props.caps} changeIt={this.props.changeIt}/>
            </div>
        )
    }
}