//contact us form with improved validation
$(".contact_btn").on('click', function (e) {
    e.preventDefault(); // Prevent default form submission
    
    //disable submit button on click to prevent double submission
    $(".contact_btn").attr("disabled", "disabled");
    $(".contact_btn b").text('Sending...');
    $(".contact_btn i").removeClass('d-none');

    //enhanced validation at client's end
    var proceed = true;
    var errorMessages = [];

    var str = $('#contact-form-data').serializeArray();

    // Check all required fields
    $('#contact-form-data input[required], #contact-form-data select[required], #contact-form-data textarea[required]').each(function() {
        if(!$(this).val() || $(this).val().trim() === '') {
            proceed = false;
            var fieldName = $(this).attr('name') || $(this).attr('id') || 'field';
            errorMessages.push(fieldName.replace('_', ' ').toUpperCase() + ' is required');
            $(this).addClass('error-field');
        } else {
            $(this).removeClass('error-field');
        }
    });

    // Email validation
    var email = $('#email').val();
    if (email && !isValidEmail(email)) {
        proceed = false;
        errorMessages.push('Please enter a valid email address');
        $('#email').addClass('error-field');
    }

    if (!proceed) {
        // Show validation errors
        alert('Please fix the following errors:\n• ' + errorMessages.join('\n• '));
        
        // Re-enable button
        $(".contact_btn").removeAttr("disabled");
        $(".contact_btn b").text('Send Message');
        $(".contact_btn i").addClass('d-none');
        return false;
    }

    // If validation passes, let backend.js handle the actual submission
    console.log('Form validation passed, backend.js will handle submission');
    
    // Re-enable button (backend.js will handle the actual submission)
    $(".contact_btn").removeAttr("disabled");
    $(".contact_btn b").text('Send Message');
    $(".contact_btn i").addClass('d-none');
});

// Email validation helper function
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add visual feedback for form fields
$(document).ready(function() {
    // Remove error styling when user starts typing
    $('#contact-form-data input, #contact-form-data select, #contact-form-data textarea').on('input change', function() {
        $(this).removeClass('error-field');
    });
});
