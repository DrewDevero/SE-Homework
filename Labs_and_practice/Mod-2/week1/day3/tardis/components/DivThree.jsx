class DivThree extends React.Component {
    constructor(props) {
        super(props);
    this.changeIt = this.changeIt.bind(this);
    }
    changeIt = (text) => {
        if (this.props.caps) {
            this.setState({
                tardis : {
                    name : text.toLowerCase(),   
                    caps : false
                }
            })
        } else {
            this.setState({
                tardis : {
                    name : text.toUpperCase(),
                    caps : true
                }
            })
        }
    }
    render() {
        return (
            <div>
                <h3 onClick={() => this.changeIt(this.props.name)}>{this.props.name}</h3>
            </div>
        )
    }   
}