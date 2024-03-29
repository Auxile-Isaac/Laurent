// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data
    fetch('../menu.json')
      .then(response => response.json())
      .then(data => {
        // Get container element
        const container = document.getElementById('contentContainer');
  
        // Iterate over JSON data and create HTML elements
        data.forEach(item => {
          const div = document.createElement('div');
          div.classList.add('menu_item');
  
          const h3 = document.createElement('h3');
          h3.textContent = item.name;
  
          const p = document.createElement('p');
          p.textContent = item.description;
  
          div.appendChild(h3);
          div.appendChild(p);
  
          container.appendChild(div);
        });
      })
      .catch(error => console.error('Error fetching JSON:', error));
  });
  