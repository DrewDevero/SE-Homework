class DivTwo extends React.Component {
    constructor(props) {
        super(props);
        /* this.props.setState({
        tardis: [this.props.children, ...this.props.children]
    }) */
    }
    
    render() {
        return (
            <div>
                <DivThree name={this.props.name} caps={this.props.caps} changeIt={this.props.changeIt}/>
                <DivThree name={this.props.name} caps={this.props.caps} changeIt={this.props.changeIt}/>
            </div>
        )
    }
}