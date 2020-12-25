/* Recreate Dashboard_Creation_Wireframe_Per_Scholas.png wireframe with React. Be sure to create a few components (e.g. app, sidebar, reviews, average rating, sentiment analysis, website visitors).
 */

// If I downloaded the styled-css-grid module
// import {Grid, Cell} from "styled-css-grid";

/* import style from "styled-components";
const Div = style.div`` */

const generalFont = {
    fontFamily : "Georgia"
}
const generalSpacing = {
    margin : "1rem"
}
const bigNumber = {
    marginTop : "0.5rem",
    fontSize : "2rem"
}
const navigation = {
    gridArea : "navigation",
    backgroundColor : "rgba(104, 104, 104, 0.25)",
    margin: "1rem",
    paddingTop: "9rem",
    boxShadow : "1rem 0rem 1rem rgba(23,189,33,0.4), -1rem 0rem 0.5rem rgba(23,22,189,0.4)",
}
const reviews = {
    gridArea : "reviews",
    backgroundColor : "rgba(104, 104, 104, 0.25)",
    margin: "1rem",
    padding : "0.5rem",
    boxShadow : "1rem 0rem 1rem rgba(23,189,33,0.4), -1rem 0rem 0.5rem rgba(23,22,189,0.4)",
}
const average = {
    gridArea : "average",
    backgroundColor : "rgba(104, 104, 104, 0.25)",
    margin: "1rem",
    padding : "0.5rem",
    boxShadow : "1rem 0rem 1rem rgba(23,189,33,0.4), -1rem 0rem 0.5rem rgba(23,22,189,0.4)",
}
const sentiment = {
    gridArea : "sentiment",
    backgroundColor : "rgba(104, 104, 104, 0.25)",
    margin: "1rem",
    padding : "0.5rem",
    boxShadow : "1rem 0rem 1rem rgba(23,189,33,0.4), -1rem 0rem 0.5rem rgba(23,22,189,0.4)",
}
const visitors = {
    gridArea : "visitors",
    backgroundColor : "rgba(104, 104, 104, 0.25)",
    margin: "1rem",
    padding : "0.5rem",
    boxShadow : "1rem 0rem 1rem rgba(23,189,33,0.4), -1rem 0rem 0.5rem rgba(23,22,189,0.4)",
}
const visitorsDivSpacing = {
    display : "flex",
    justifyContent : "center"
}
const innerVisitors = {
    background : "rgba(104, 104, 104, 0.5)",
    marginTop : "3rem",
    padding : "1rem",
    height : "10rem",
    width : "82%",
    boxShadow : "1rem 0rem 1rem rgba(23,189,33,0.4), -1rem 0rem 0.5rem rgba(23,22,189,0.4)",
}
const gridTextSpacing = {
    textAlign : "center"
}
const gridSpacing = {
    display: "flex",
    justifyContent : "center",
    margin: "2rem"
}

const analiticsGridTemplate = {
    height: "50rem",
    width: "56rem",
    display: "grid",
    gridTemplateColumns : "14rem 14rem 14rem 14rem",
    gridTemplateRows : "15rem 30rem",
    gridTemplateAreas :` 
        "navigation reviews average sentiment" 
        "navigation visitors visitors visitors"
    `,
    backgroundColor : "rgba(104, 104, 104, 0.10)",
    padding : "3rem 0.5rem 1rem 0.5rem",
    boxShadow : "1rem 0rem 1rem rgba(0,0,255,0.2), -1rem 0rem 0.5rem silver",
}


class App extends React.Component {
    render() {
        return (
            <div style = {gridSpacing}>
                <div style = {generalFont}>
                    <div style = {analiticsGridTemplate}>
                        <div style = {navigation}>
                            <div style = {generalSpacing}>Dashboard</div>
                            <div style = {generalSpacing}>Widget</div>
                            <div style = {generalSpacing}>Reviews</div>
                            <div style = {generalSpacing}>Customers</div>
                            <div style = {generalSpacing}>Online Analysis</div>
                            <div style = {generalSpacing}>Settings</div>
                        </div>
                        <div style = {reviews}>Reviews<div style = {bigNumber}>1,281</div></div>
                        <div style = {average}>Average Rating<div style = {bigNumber}>4.6</div></div>
                        <div style = {sentiment}>Sentiment Analysis<div style = {gridTextSpacing}>
                        <div style = {generalSpacing}>960</div>
                        <div style = {generalSpacing}>122</div>
                        <div style = {generalSpacing}>321</div>
                        </div></div>
                        <div style = {visitors}>Website Visitors
                            <div style = {bigNumber}>821</div>
                            <div style = {visitorsDivSpacing}>
                                <div style = {innerVisitors}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            /* // if the styled-css-grid module were imported 
            
            <Grid
                columns = {"1fr 1fr 1fr 1fr"}
                rows = {"1fr 2fr"}
                areas = {[
                    "navigation reviews average sentiment",
                    "navigation visitors visitors visitors"
                ]}>
                <Cell area = "navigation">Dashboard&bsp;Widget&bsp;Reviews&bsp;Customers&bsp;Online Analysis&bsp;Settings</Cell>
                <Cell area = "reviews">Reviews</Cell>
                <Cell area = "average">Average</Cell>
                <Cell area = "sentiment">Sentiment</Cell>
                <Cell area = "visitors">Visitors</Cell>
            </Grid> */
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("main")
);