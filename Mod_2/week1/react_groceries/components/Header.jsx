class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <header style={this.props.styles.headerStyle}>
                <h1>react groceries!</h1>
            </header>
        )
    }
}
