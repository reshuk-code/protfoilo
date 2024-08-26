document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchPopup = document.getElementById('searchPopup');
    const searchResult = document.getElementById('searchResult');
    const searchContent = document.getElementById('searchContent');
    const closeBtn = document.querySelector('.close');
    const toast = document.getElementById('myToast');
    const backToTopButton = document.getElementById('backToTop');
  
    // Show toast message after 10 seconds
    setTimeout(() => {
      $(toast).toast('show');
    }, 10000);
  
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const query = searchForm.querySelector('input[type="search"]').value.trim().toLowerCase();
      
      if (query) {
        // Define the content for each project
        const project1Content = `
          <div id="project">
            <h3>Project-1</h3>
            <img src="https://dummyimage.com/350x350/252525/e3f2fd" alt="">
            <span>Name : *only for presentation</span>
          </div>`;
        const project2Content = `
          <div id="project">
            <h3>Project-2</h3>
            <img src="https://dummyimage.com/350x350/252525/e3f2fd" alt="">
            <span>Name : *only for presentation</span>
          </div>`;
        const project3Content = `
          <div id="project">
            <h3>Project-3</h3>
            <img src="https://dummyimage.com/350x350/252525/e3f2fd" alt="">
            <span>Name : *only for presentation</span>
          </div>`;
        const allProjectsContent = `
          <div id="my-project">
            <div id="myproject-text">
              <h1>Prot<Span>Foilo</Span> projects</h1>
              <div id="project-section-main">
                ${project1Content}
                ${project2Content}
                ${project3Content}
              </div>
            </div>
          </div>`;
  
        // Determine which content to show based on the query
        let resultContent = '';
        if (query.includes('project 1')) {
          resultContent = project1Content;
        } else if (query.includes('project 2')) {
          resultContent = project2Content;
        } else if (query.includes('project 3')) {
          resultContent = project3Content;
        } else if (query.includes('project') || query.includes('projects')) {
          resultContent = allProjectsContent;
        }
  
        if (resultContent) {
          searchResult.textContent = `Showing search result for "${query}"`;
          searchContent.innerHTML = resultContent;
          searchPopup.style.display = 'block';
        } else {
          alert('Search not available. Please enter correct keywords.');
        }
      } else {
        alert('Please enter a search query.');
      }
    });
  
    // Close the popup when the user clicks on <span> (x)
    closeBtn.addEventListener('click', () => {
      searchPopup.style.display = 'none';
    });
  
    // Close the popup when the user clicks anywhere outside of the popup
    window.addEventListener('click', (event) => {
      if (event.target == searchPopup) {
        searchPopup.style.display = 'none';
      }
    });
  
    // Show or hide the "Back to Top" button
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  
    // Scroll to the top of the page when the button is clicked
    backToTopButton.addEventListener('click', () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });
  