const quote = document.querySelector('.quote')
const id = document.querySelector('#id')

const App = () => {
    fetch("https://api.adviceslip.com/advice", ).then(res => res.json()).then(
        data => {
            quote.innerHTML = `"${data.slip.advice}"`
            id.innerHTML = `#${data.slip.id}`
        }
    )
}

