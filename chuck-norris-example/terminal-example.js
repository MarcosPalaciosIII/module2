const Chuck = require('chucknorris-io');

const client = new Chuck();

client.getRandomJoke()
.then((response) => {
  console.log("Joke Data: ", response);

  console.log("Random Joke: ");
  console.log(response.value);
})

  .catch((err) => {
    console.log("Joke ERROR: ", err);
});
