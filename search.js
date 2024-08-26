document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');
    const searchResult = document.getElementById('searchResult');
  
    if (query) {
      // Assuming you have a list of items to search from
      const items = ['Home', 'About me', 'My Projects', 'Contact' , ];
      const result = items.find(item => item.toLowerCase().includes(query.toLowerCase()));
  
      if (result) {
        searchResult.textContent = `Showing search result for "${query}"`;
      } else {
        searchResult.textContent = `Search not available for "${query}"`;
      }
    }
  });
  