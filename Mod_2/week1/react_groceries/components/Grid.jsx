class Grid extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <main className={this.props.flexCenter}>
                <article id={this.props.gridSpacing}>
                <h2>Items to appear here based on mockup</h2>
                </article>
            </main>
        )
    }
}
