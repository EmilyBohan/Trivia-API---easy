//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = Number(document.querySelector('input').value)
  const url = 'https://opentdb.com/api.php?amount=30&difficulty=easy'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.results[choice].question
        document.querySelector('h3').innerText = data.results[choice].correct_answer
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}