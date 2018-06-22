// Variable to hold request
var request;

// Bind to the submit event of our form
$("#contact_form").submit(function(event) {

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    var payload = {
        url: "https://script.google.com/macros/s/AKfycbzJfEN5_LtAZNDPKZJ5toPfYRMPOy2s3nsHxFsFQCDi5p-CMQ/exec",
        type: "post",
        data: serializedData
    }
    request = jQuery.ajax(payload);

    // Callback handler that will be called on success
    request.done(function(response, textStatus, jqXHR) {
        // Log a message to the console
        alert('Thank you for your query. We have received your request and we will revert back shortly.');
        window.location.href = 'http://www.thevalleybootcamp.com/';
    });

    // Callback handler that will be called on failure
    request.fail(function(jqXHR, textStatus, errorThrown) {
        // Log the error to the console
        console.error(
            "The following error occurred: " +
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function() {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});

// Bind to the submit event of our form
$("#course_application").submit(function(event) {

    var name = $('#form1_name').val();
    var email = $('#form1_email').val();
    var phone = $('#form1_phone').val();
    var message = $('#form1_message').val();

    if (name == '') {
        alert('Please provide us your name');
        return false;
    } else if (email == '') {
        alert('Please enter your email address');
        return false;
    } else if (phone == '' || isNaN(phone)) {
        alert('Please enter a valid phone number');
        return;
    } else if (message == '') {
        alert('Please provide us a message');
        return false;
    }

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    var payload = {
        url: "https://script.google.com/macros/s/AKfycbwn9KVj1uqnCEYBffZ2Oy_XVLA8gcYjzH-MlYzGeyATAtTIOA/exec",
        type: "post",
        data: serializedData
    }
    request = jQuery.ajax(payload);

    // Callback handler that will be called on success
    request.done(function(response, textStatus, jqXHR) {
        // Log a message to the console
        alert('Thank you for showing your interest. We will contact you shortly.');
    });

    // Callback handler that will be called on failure
    request.fail(function(jqXHR, textStatus, errorThrown) {
        // Log the error to the console
        console.error(
            "The following error occurred: " +
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function() {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});