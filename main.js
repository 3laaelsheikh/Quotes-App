var quotes = [
    "“Be yourself; everyone else is already taken.“ ― Oscar Wilde",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ― Albert Einstein",
    "“A room without books is like a body without a soul.” ― Marcus Tullius Cicero",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”― Bernard M. Baruch",
    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss",
    "“Be the change that you wish to see in the world.” ― Mahatma Gandhi",
    "“In three words I can sum up everything I've learned about life: it goes on.”― Robert Frost",
    "“You only live once, but if you do it right, once is enough.”― Mae West",
    "“If you tell the truth, you don't have to remember anything.” ― Mark Twain",
    "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” Maya Angelou",
    "“To live is the rarest thing in the world. Most people exist, that is all.”― Oscar Wilde",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.”― Mahatma Gandhi",
    "“The fool doth think he is wise, but the wise man knows himself to be a fool.”― William Shakespeare",
    "“A day without sunshine is like, you know, night.” ― Steve Martin",
    "“It is never too late to be what you might have been.” ― George Eliot",
    
]
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}