class DivThree extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h3 onClick={() => this.props.changeIt(this.props.name)}>{this.props.name}</h3>
            </div>
        )
    }   
}