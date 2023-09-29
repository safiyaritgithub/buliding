let quotesList=[
  {
    quote :"To live is the rarest thing in the world. Most people exist, that is all.",
    author:"Adams"
  },
  
  {
    quote:"That it will never come again is what makes life so sweet.",
    author:"Louise hay"
  },
  {
    quote:"That it will never come again is what makes life so sweet.",
    author:"helen killer"
  },
  {
    quote:"That it will never come again is what makes life so sweet.",
    author:"pisacco"
  },
  {
    quote:"That it will never come again is what makes life so sweet.",
    author:"Emerson"
  },
  {
    quote:"That it will never come again is what makes life so sweet.",
    author:"Ansel"
  },
]
let quoteEle=document.getElementById("quote")

let authorEle=document.getElementById("author")
function getLocalQuotes(){
  let i= Math.floor(Math.random()*quotesList.length)
  quoteEle. innerText=quotesList[i].quote
  authorEle. innerText="--"+""+quotesList[i].author
}

document.getElementById("getQuote").onclick = getLocalQuotes

async function quoteAPI(){
  let response = await fetch("https://api.quotable.io/random");
  let quote = await response.json()
  quoteEle.innerText = quote.content
  authorEle.innerText="--"+" "+ quote.author

}
document.getElementById("getQuote").onclick = quoteAPI()

