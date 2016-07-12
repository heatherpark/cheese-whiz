var cards = 'AABBCCDD';
cards = cards.split('');

// shuffle cards using underscore's shuffle

// game functionality
  // when card is clicked
    // increment counter
    // add value of card to array
    // change text color to black
  // when counter reaches 2 -> compare values in array
    // if values are not the same
      // change text color back to white
      // pop 2 items off array
  // when array item reaches 8
    // game is done
