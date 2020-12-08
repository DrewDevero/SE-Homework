const API_KEY = "c610kpoxk1saq6ajew53vfdd2";
const APP_TOKEN = "sXJIk9nYJsJZsNBgnbF9ZNJpc";
const NYPD_AGENCY = "New York City Police Department";
const BOROUGHS = ["BROOKLYN", "MANHATTAN", "QUEENS", "STATEN ISLAND", "BRONX"];
let backgroundColors = ["green", "blue", "red", "orange", "purple"];
const MY_URL = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?";
/* const promise = $.ajax({url: `${MY_URL}${parseInt($("input").val())}`}) */
/* $(() => setTimeout(()=> alert("Dougie the Donut & Pizza Rat - by Drew Devero"), 2000)); */

/* Users should be able to see five buttons for the five boroughs (manhattan, brooklyn, queens, staten island, bronx) of New York City when they load the page
Users should also be able to see an input box where they can put in a number of how many complaints they want to see
When the user clicks on one of the five buttons, a list of complaints should be displayed on the page, according to the number they input AND the borough they clicked on
If the user doesn't input any number, make the default be 10
Remember, also, they only want complaints that were handled by the NYPD! (hint: consider filtering for a specific "agency" when making the API call)
When the list of complaints is shown, each complaint should also have a button on it that reads something along the lines of "toggle police response"
When the user clicks on on the "toggle police response" button, it should then toggle how the police responded to that particular complaint
Make sure it only toggles the response for that one complaint, not the entire list! */

$(() => {
    $("body").css({
    "background-color" : "lightgrey"
    });
    $("h2").css({
    "font-size" : "2rem",
    "text-transform" : "capitalize"
    })
    $("div").append("<button>");
    $("button").text("check");
    $("button").css({
        "height" : "4rem",
        "width" : "8rem",
        "color" : "white",
        "font-size" : "1.5rem",
        "font-weight" : "bolder",
        "text-transform" : "capitalize",
        "background" : "rgba(0,0,0,0.25)",
        "cursor" : "pointer"
    });
    const numberOfBuroughDivs = BOROUGHS.length
// prevent default on every button and add input field after every h2 tag

    for(let i = 0; i < numberOfBuroughDivs; i++) {
        $("button").eq(i).on("submit", (e) => {
            e.preventDefault();
        })
        $("h2").eq(i).append("<input>");
        $("input:text").val("10");
        $("<p>").insertAfter("<button>").eq(i);
        // query each borough with specific information and display it in div when button is pressed
        $("button").eq(i).click(()=>{
            if(typeof parseInt($("input:text").eq(i).val()) === "number") {
                $.ajax({
                    url: MY_URL,
                    type: "GET",
                    data: {
                        "$limit" : parseInt($("input:text").eq(i).val()),
                        "$$app_token" : APP_TOKEN,
                        "agency_name" : NYPD_AGENCY,
                        "borough" : BOROUGHS[i]
                    }
                }).done((data) => {
                    /* for (let j = 0; j < userInput; j ++) { */
                        /* $("p").eq(i).html(data[j]); */
                        console.log(data);
                    }) 
                }
            else if ($("input:text").eq(i).val("0") || isNaN(parseInt($("input:text").eq(i).val())) === true) {
                setTimeout(() => {$.ajax({
                    url: MY_URL,
                    type: "GET",
                    data: {
                        "$limit" : 10,
                        "$$app_token" : APP_TOKEN,
                        "agency_name" : NYPD_AGENCY,
                        "borough" : BOROUGHS[i]
                    }
                }).done((data) => {
                    /* for (let j = 0; j < userInput; j ++) {
                        $("p").eq(i).html(data[j].borough); */
                         console.log(data);
                    })
                }, 500);
            }
        })
    }
    $("input:text").css({
        "margin-left" : "1rem"
    })
    $("input:text").attr("placeholder", "Type your number here");

// add right margin and different BG color styling to every div

    backgroundColors.forEach((item, index) => {
        $("div").eq(index).css({
            "background-color" : item,
            "margin-right" : "50%"
        })
    })

    /* console.log(promise); */
})




// return burough, descriptor, agency, and resolution_description