var quotes=[
    {
        quote:`So many books, so little time.`,
        author:`― Frank Zappa`,
    },
    {
        quote:`A room without books is like a body without a soul.`,
        author:` Marcus Tullius Cicero`,
    },
    {
        quote:`You only live once, but if you do it right, once is enough.`,
        author:`― Mae West`,
    },
    {
        quote:`Be the change that you wish to see in the world.`,
        author:`― Mahatma Gandhi`,
    },
    {
        quote:`In three words I can sum up everything I've learned about life: it goes on.`,
        author:`― Robert Frost`,
    },
    {
        quote:`If you tell the truth, you don't have to remember anything.`,
        author:`― Mark Twain`,
    },
    {
        quote:`A friend is someone who knows all about you and still loves you.`,
        author:`― Elbert Hubbard`,
    },
]
var btn = document.getElementById('cbtn');
var quote = document.querySelector('#quote');
var author = document.querySelector('#author');

 btn.addEventListener('click',function(){
     var r=Math.floor(Math.random() * quotes.length);
     quote.innerHTML=quotes[r].quote;
     author.innerHTML=quotes[r].author;
 })

