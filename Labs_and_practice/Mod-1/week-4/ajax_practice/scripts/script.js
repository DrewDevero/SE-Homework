// API key 
const apiKey = "5d6e4119";
const myUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=`; // going to fill in with a movie title

$("*").css({
    "margin" : "0",
    "padding" : "0"
});
$("h1").css({
    "margin" : "1rem"
});
$("dt").css({
    "margin" : "1rem 1rem 0rem"
});
$("dd").css({
    "margin" : "0rem 1rem 0rem 2rem"
});
$("form").css({
    "margin" : "1rem"
});

/*
// user input form submit done one way:

$(() => {
    // onload we want to attach an event listener to our form w/ JQuery
        // when form submits, we want to. . .
        // seclet the form and add event listener to prevent reload
    $("form").on("submit", (e) => {
        e.preventDefault();
    })
    // select input field and text input
    const userInput = $("#user-movie-input").val();
    // take user input and tak it onto the url
    const filledUrl = myUrl + userInput;
    // make am ajax call using my url information and the user input
    const promise = $.ajax({
        url: filledUrl
    })
    promise.then(
        (data) => {
            $("#title").text(data.Title);
            $("#year").text(data.Year);
            $("#rated").text(data.Rating);
        },
        (err) => {
            console.error(err);
        }
    )
})
*/
// user input form submit done a slight different way

$("form").on("submit", (event) => {
    event.preventDefault();
    const userInput = $('input[type="text"]').val();

    /* $.ajax({
        url: myUrl + "Frozen",
        success: (data) => {
            console.log(data);
        },
        error: () => {
            console.log("bad request");
        }
    }); */

    // reformatting of above, listed below

    const promise = $.ajax({
        url: myUrl + userInput // http://www.omdbapi.com/?i=tt3896198&apikey=5d6e4119&t=Frozen
    })
    // Promise obj has .then AND .catch
    // .then is like a success. If your asyn function worked. Run .then - takes a callback function
    // .catch is to catch your errors - takes a callback fucntion
    console.log(promise);

    promise.then(
        (data) => {
            console.log(data);
            $("#title").html(data.Title);
            $("#year").html(data.Year);
            $("#rated").html(data.Rated);
        },
        (err) => {
            console.log("bad request");
            console.error(err);
        }
    );
});
// promise.then(data => console.log(data)).catch(err => console.error(err))

/* promise.then(data => {
    console.log(data)
    $("title").html(data.Title);
    $("year").html(data.Year);
    $("rated").html(data.Rated);
}).catch(err => {
    console.error(err)
}) */

// async function callFrozen() {
//   try {
//     const res = await $.ajax({ url: myUrl + 'Frozen' })
//     console.log(res);
//   } catch(e) {
//     console.error(e, e.message)
//   }
// }
// callFrozen();