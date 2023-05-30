window.onload = async function() {
    await fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => console.log(response));
};