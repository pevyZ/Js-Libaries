function toggleSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchIcon = document.getElementById('searchIcon');
  const productList = document.getElementById('productList');
  const contactList = document.getElementById('contactList');

  // Toggle the display state of the input field and icon
  if (searchInput.style.display === 'none') {
      searchInput.style.display = 'block'; // Show the input field
      searchIcon.style.display = 'none'; // Hide the icon
      productList.style.display = 'none'; // Hide the product list
      contactList.style.display = 'none'; // Hide the contact list
      searchInput.focus(); // Optional: focus on the input when it appears
  }
}

// Hide the input field and show the icon when clicking anywhere else
document.addEventListener('click', function(event) {
  const searchInput = document.getElementById('searchInput');
  const searchIcon = document.getElementById('searchIcon');
  const searchContainer = document.querySelector('.search-container');
  const productList = document.getElementById('productList');
  const contactList = document.getElementById('contactList');

  // If the click is outside the search container, hide the input field and show the icon
  if (!searchContainer.contains(event.target)) {
      searchInput.style.display = 'none'; // Hide the input field
      searchIcon.style.display = 'block'; // Show the icon
      productList.style.display = 'block'; // Show the product list
      contactList.style.display = 'block'; // Show the contact list
  }
});




// show and hide NEW ARRIVALS section







// Carousel JS
$(window).on("load",function(){

  var boxes = $(".box"),ß
      stage = $(".stage");
  
  TweenLite.set(stage, {
    css: {
      perspective: 1100,
      transformStyle: "preserve-3d"
    }
  });
  
  boxes.each(function(index, element) {
    TweenLite.set(element, {
      css: {
        rotationY: index * 360 / 13,
        transformOrigin: "50% 50% -420"
      }
    });
    TweenMax.to(element, 20, {
      css: {
        z:0.01,
        rotationY: "+=359"
      },
      repeat: -1, // 20
      ease: Linear.easeNone
    });
  }); 
  });


// isotope-------------------------------

createItems();

var $container = $('#container').isotope({
  itemSelector: '.item'
});

var $output = $('#output');

// filter with selects and checkboxes
var $selects = $('#form-ui select');
var $checkboxes = $('#form-ui input');

$selects.add( $checkboxes ).change( function() {
  // map input values to an array
  var exclusives = [];
  var inclusives = [];
  // exclusive filters from selects
  $selects.each( function( i, elem ) {
    if ( elem.value ) {
      exclusives.push( elem.value );
    }
  });
  // inclusive filters from checkboxes
  $checkboxes.each( function( i, elem ) {
    // if checkbox, use value if checked
    if ( elem.checked ) {
      inclusives.push( elem.value );
    }
  });

  // combine exclusive and inclusive filters

  // first combine exclusives
  exclusives = exclusives.join('');

  var filterValue;
  if ( inclusives.length ) {
    // map inclusives with exclusives for
    filterValue = $.map( inclusives, function( value ) {
      return value + exclusives;
    });
    filterValue = filterValue.join(', ');
  } else {
    filterValue = exclusives;
  }

  $output.text( filterValue );
  $container.isotope({ filter: filterValue })
});

function createItems() {
  $('.clear').empty();

  // Define item data with unique image paths and categories for each card
  var itemsData = [
    { category: 'New Arrivals', img: 'assets/images/carousel1.png' },
    { category: 'New Arrivals', img: 'assets/images/carousel2.png' },
    { category: 'New Arrivals', img: 'assets/images/carousel3.png' },
    { category: 'New Arrivals', img: 'assets/images/carousel4.png' },

    { category: 'Furniture', img: 'assets/images/carousel5.png' },
    { category: 'Furniture', img: 'assets/images/carousel6.png' },
    { category: 'Furniture', img: 'assets/images/carousel7.png' },
    { category: 'Furniture', img: 'assets/images/carousel8.png' },

    { category: 'Accessories', img: 'assets/images/carousel9.png' },
    { category: 'Accessories', img: 'assets/images/carousel10.png' },
    { category: 'Accessories', img: 'assets/images/carousel11.png' },
    { category: 'Accessories', img: 'assets/images/carousel12.png' }
  ];

  // Create a container with UIkit grid classes for a responsive layout
  var $itemsContainer = $('<div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid></div>');

  itemsData.forEach(function(itemData) {
    // Each item is wrapped in a <div> with the required structure for UIkit
    var $itemWrapper = $('<div></div>'); // UIkit grid column wrapper

    // Create the item card with the specified category, wrapped in a link
    var $item = $('<a />', {
      'class': 'item uk-card uk-card-default uk-card-body',
      'data-category': itemData.category, // Set category for filtering
      'href': '#', // Link to the product page placeholder
      'style': 'position: relative; display: block; overflow: hidden;'
    });

    // Add image and category overlay to the item
    $item.append('<img src="' + itemData.img + '" alt="Product Image" style="width: 100%; height: 100%; object-fit: cover;">');
    $item.append('<div class="overlay">' + itemData.category + '</div>'); // Overlay with category name

    $itemWrapper.append($item); // Append the link to the wrapper
    $itemsContainer.append($itemWrapper); // Append the wrapper to the container
  });

  $('#newArrivals').append($itemsContainer); // Append the entire grid to #newArrivals container
}

// CSS styles for the overlay
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=Foldit:wght@100..900&family=Sixtyfour+Convergence&family=Wix+Madefor+Display:wght@400..800&display=swap');
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: none;
    color: black;
    padding: 10px;
    font-size: 1.2em;
    text-align: center;
    transition: 0.3s;
    font-family: 'Crimson Pro', serif;
  }
`;

// Append styles to the document head
$('<style>').prop('type', 'text/css').html(styles).appendTo('head');

// Function to filter items by selected categories
function filterItems() {
  var selectedCategories = [];

  $('#form-ui input[type="checkbox"]:checked').each(function() {
    selectedCategories.push($(this).val());
  });

  $('.item').each(function() {
    var itemCategory = $(this).data('category');
    if (selectedCategories.includes(itemCategory)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}

// Bind checkbox change event to filter items based on selected categories
$('#form-ui input[type="checkbox"]').on('change', filterItems);

// Initial call to populate items
createItems();
