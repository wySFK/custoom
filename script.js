// script.js
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const clickableSentences = document.querySelectorAll('.clickable-sentence');

const items = ['REPUBLIC ACT NO. 10863, May 30, 2016', 'You can click on sentences to search.', 'Search functionality is implemented using JavaScript.'];

function displayResults(results) {
  searchResults.innerHTML = '';
  results.forEach(result => {
    const li = document.createElement('li');
    li.textContent = result;
    searchResults.appendChild(li);
  });
}

function handleSentenceClick(event) {
  const clickedSentence = event.target.textContent.trim();
  searchInput.value = clickedSentence;
  handleSearch();
}

function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredItems = items.filter(item => item.toLowerCase().includes(searchTerm));
  displayResults(filteredItems);
}

searchInput.addEventListener('input', handleSearch);

clickableSentences.forEach(sentence => {
  sentence.addEventListener('click', handleSentenceClick);
});




function calculate() {
    var expression = document.getElementById("expression").value;
    
    // Remove spaces from the expression
    expression = expression.replace(/\s/g, '');
  
    try {
      var result = eval(expression);
      document.getElementById("result").innerText = "Result: " + result;
    } catch (error) {
      document.getElementById("result").innerText = "Error: Invalid expression";
    }
  }
  
  function addSymbol(symbol) {
    document.getElementById("expression").value += symbol;
  }
  