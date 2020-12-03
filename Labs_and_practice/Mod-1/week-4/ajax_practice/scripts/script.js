// API key 
const apiKey = "5d6e4119";
const myUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=`; // going to fill in with a movie title

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
        url: myUrl + userInput, // http://www.omdbapi.com/?i=tt3896198&apikey=5d6e4119&t=Frozen
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
        () => {
            console.log("bad request");
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