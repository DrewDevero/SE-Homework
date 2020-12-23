class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <header style={this.props.generalStyling && this.props.headerStyle}>
                <h1>react groceries!</h1>
            </header>
        )
    }
}
