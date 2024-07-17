/**
 * Function to fetch and display shoe details.
 * @param {string} shoeId - The ID of the shoe to view.
 */
function viewShoeDetails(shoeId) {
    $.ajax({
        url: `/shoes/${shoeId}`,
        method: 'GET',
        success: function(response) {
            $('main').html(response);
            history.pushState({shoeId: shoeId}, '', `/shoes/${shoeId}`);
        },
        error: function(xhr, status, error) {
            console.error('Error fetching shoe details:', error);
        }
    });
}

// Handle browser back and forward navigation
$(window).on('popstate', function(event) {
    if (event.originalEvent.state && event.originalEvent.state.shoeId) {
        viewShoeDetails(event.originalEvent.state.shoeId);
    } else {
        window.location.reload();
    }
});
