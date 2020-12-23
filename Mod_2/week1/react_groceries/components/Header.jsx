class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <header style={this.props.generalStyling && this.props.headerStyle}>
                <h1>React Groceries!</h1>
            </header>
        )
    }
}
