function xgetRandomNumber(top)
{
  return Math.floor(Math.random() * top);
}

function zbackgroundColor()
{
  var randomColorr = xgetRandomNumber(256);
  document.body.style.backgroundColor = randomColorr;
}

zbackgroundColor();



// returns a random quote object from the quotes array.


// returns a random color
