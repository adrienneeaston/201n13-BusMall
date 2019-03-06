// Create an constructor with at least the properties of 
// image name, filepath, number of times it has been shown, and the number of times it has been clicked.

// Create objects for each item

// items shoud be able to be randomly generated and displayed into HTML
// Create and use a counter to keep track of how many times each item is displayed.

// Create a listener that will listen for which item was clicked
// Create and use a counter to keep track of how many times an item is chosen.

// Display new items and repeat the last two steps. Do this 25 times using a for loop.
// Don't repeat items in the display and for the next round.

// For each item, calculate the percentage of times it was chosen using the two counters.

// Put results into a string for each item. Append these strings to HTML.

'use strict';

var productPicOne = document.getElementById('productpic1');
var productPicTwo = document.getElementById('productpic2');
var productPicThree = document.getElementById('productpic3');
var allProducts = [];

function Products(name, src, alt, title) {
  this.filepath = `img/${name}.jpg`;
  this.name = name;
  this.views = 0;
  allProducts.push(this);
}

new Products('bag', 'bag.jpg', 'R2D2 suitcase', 'R2D2 suitcase');
new Products('banana', 'banana.jpg', 'banana', 'banana');
new Products('bathroom', 'bathroom.jpg', 'bathroom', 'bathroom');
new Products('boots', 'boots.jpg', 'boots', 'boots');
new Products('breakfast', 'breakfast.jpg', 'breatfast', 'breakfast');


function showRandomProducts() {
  for(var i = 0; i < 3; i++) {
    var random = Math.floor(Math.random() * allProducts.length);
    console.log(random);
    if (i === 0) {
      var productPic = productPicOne;
    } else if (i === 1) {
      var productPic = productPicTwo;
    } else {
      var productPic = productPicThree;
    }
    productPic.src = allProducts[random].filepath;
    productPic.alt = allProducts[random].name;
    productPic.title = allProducts[random].name;
    allProducts[random].views++;
    console.log('current product, ', allProducts[random]);
  }
}

showRandomProducts();

productPic.addEventListener('click', handleClick);
function handleClick(event) {
  console.log('target, ', event.target);
  showRandomProducts();
}

console.log(allProducts);