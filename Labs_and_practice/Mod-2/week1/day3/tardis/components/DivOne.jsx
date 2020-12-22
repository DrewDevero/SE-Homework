class DivOne extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>{this.props.state.tardis.name}</h3>
                <h3 onClick={() => this.changeIt(this.props.state.tardis.name)}>{this.props.state.tardis.name}</h3>
            </div>
        )
    }
}