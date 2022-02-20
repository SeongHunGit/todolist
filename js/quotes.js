const quotes = [
  {
    quote: "양반 공부 상놈 공부",
    author: "이동욱"
  },
  {
    quote: "양반 공부 상놈 공부",
    author: "이동욱"
  },{
    quote: "양반 공부 상놈 공부",
    author: "이동욱"
  },{
    quote: "양반 공부 상놈 공부",
    author: "이동욱"
  },{
    quote: "양반 공부 상놈 공부",
    author: "이동욱"
  },{
    quote: "양반 공부 상놈 공부",
    author: "이동욱"
  },{
    quote: "양반 공부 상놈 공부",
    author: "이동욱"
  },{
    quote: "양반 공부 상놈 공부",
    author: "이동욱"
  },{
    quote: "양반 공부 상놈 공부",
    author: "이동욱"
  },{
    quote: "양반 공부 상놈 공부",
    author: "이동욱"
  },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)])

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author