var watermark = document.createElement('div');
watermark.classList.add('watermark');
watermark.textContent = 'EduTech MasterMind'; // Replace with your desired watermark text

// Create an image element
var image = document.createElement('img');
image.src = './image'; // Replace 'path_to_your_image.jpg' with the actual path to your image
image.classList.add('watermark-image'); // Add the 'watermark-image' class to the image

// Append the watermark and image to the document body
document.body.appendChild(watermark);
document.body.appendChild(image);



// Function to add 'active' class to clicked link and remove from others
function activateLink(link) {
  var links = document.querySelectorAll('a');
  links.forEach(function(item) {
    item.classList.remove('active');
  });
  link.classList.add('active');
}
// Your JavaScript code goes here
const suggestions = [
  { title: 'Conversion', link: 'conversion.html' },
  { title: 'Table of angle conversion', link: 'conversion.html#Angle' },
  { title: 'Table of area conversion', link: 'conversion.html#Area' },
  { title: 'Table of length conversion', link: 'conversion.html#Length' },
  { title: 'Table of power conversion', link: 'conversion.html#Power' },
  { title: 'Table of pressure conversion', link: 'conversion.html#Pressure' },
  { title: 'Table of speed conversion', link: 'conversion.html#Speed' },
  { title: 'Table of temperature conversion', link: 'conversion.html#Temperature' },
  { title: 'Table of time conversion', link: 'conversion.html#time' },
  { title: 'Table of volume conversion', link: 'conversion.html#Volume' },
  { title: 'Table of weight&mass conversion', link: 'conversion.html#Weight&Mass' },
  { title: 'Angle unit conversion', link: 'angle-unit-conversion.html' },
  { title: 'Angle Conversion - Definition, type , formula', link: 'angle-unit-conversion.html#Angle' },
  { title: 'Area unit conversion', link: 'area-unit-conversion.html' },
  { title: 'Length unit conversion', link: 'length-unit-conversion.html' },
  { title: 'Power unit conversion', link: 'power-unit-conversion.html' },
  { title: 'Pressure unit conversion', link: 'pressure-unit-conversion.html' },
  { title: 'Speed unit conversion', link: 'speed-unit-conversion.html' },
  { title: 'Temperature unit conversion', link: 'temperature-unit-conversion.html' },
  { title: 'Time unit conversion', link: 'time-unit-conversion.html' },
  { title: 'Volume unit conversion', link: 'volume-unit-conversion.html' },
  { title: 'Weight&Mass unit conversion', link: 'weight&mass-unit-conversion.html' },
  { title: 'Multiplication table', link: 'multiplication-table.html' },
  { title: 'Facebook Account को सुरक्षित कैसे रखें?', link: 'how-to.html#facebook' }
];

function showSuggestions(inputValue) {
  const suggestionList = document.getElementById('suggestion-list');
  suggestionList.innerHTML = '';

  if (inputValue.length === 0) {
    suggestionList.style.display = 'none';
    return;
  }

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  filteredSuggestions.forEach(suggestion => {
    const listItem = document.createElement('li');
    listItem.textContent = suggestion.title;
    listItem.addEventListener('click', () => {
      window.location.href = suggestion.link;
    });
    suggestionList.appendChild(listItem);
  });

  suggestionList.style.display = 'block';
}

document.getElementById('search-input').addEventListener('input', function() {
  showSuggestions(this.value);
});

document.addEventListener('click', function(event) {
  const targetElement = event.target;
  if (!targetElement.closest('.search-container')) {
    document.getElementById('suggestion-list').style.display = 'none';
  }
});
