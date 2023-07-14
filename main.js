

// var btnQuote= document.getElementById(`btnQuote`);
// var quote =document.getElementById(`quote`);

//   var quotes=[


// `Resentment is like drinking poison and waiting for your enemies to die. 
// --Nelson Mandela`,
// `It's not what happens to you, but how you react to it that matters.
// --Epictetus`,
// `The best revenge is massive success.
// --Frank Sinatra`,
// `So many books, so little time.
// -- Frank Zappa`,
// `  A room without books is like a body without a soul.
// -- Marcus Tullius Cicero`,
// `ou only live once, but if you do it right, once is enough.
// -- Mae West`,

//   ];

// btnQuote.addEventListener(`click`,function(){
// var randomQuote=quotes[Math.floor(Math.random()*quotes.length)]
// quote.innerHTML=randomQuote;

// })

var quotes =[
  `"Resentment is like drinking poison and waiting for your enemies to die. "`,
  `"It's not what happens to you, but how you react to it that matters. "`,
  `"The best revenge is massive success."`,
  `"So many books, so little time." `,
  ` " A room without books is like a body without a soul."`,
  `"ou only live once, but if you do it right, once is enough."`,
]
var authors=[
`--Nelson Mandela`,
`--Epictetus`,
`--Frank Sinatra`,
`-- Frank Zappa`,
` -- Marcus Tullius Cicero`,
`-- Mae West`
]
function showQuote() {
  var cartona=Math.floor(Math.random()*quotes.length)
  document.getElementById("quote").innerHTML=quotes[cartona]
  document.getElementById("author").innerHTML=authors[cartona]

}



