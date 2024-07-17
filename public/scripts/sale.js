document.addEventListener('DOMContentLoaded', () => {
    // דוגמה לקריאת Ajax לטעינת תכנים נוספים לעמוד
    fetch('/api/sale')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // אפשר לעדכן כאן את הדף בתוכן שהתקבל
        })
        .catch(error => console.error('Error fetching data:', error));
});
