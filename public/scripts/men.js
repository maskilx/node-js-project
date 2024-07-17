document.addEventListener('DOMContentLoaded', () => {
    
    fetch('/api/men')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
        })
        .catch(error => console.error('Error fetching data:', error));
});
