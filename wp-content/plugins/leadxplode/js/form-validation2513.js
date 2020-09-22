// Wait for the DOM to be ready
jQuery(document).ready(function() {
  // Initialize form validation on the ink-form form.
  // It has the name attribute "ink-form"
 jQuery("form[name='inkleadsform']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      Name: "required",     
      Email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      Number:"required",
      Message:"required",
      label1:"required",
      label2:"required",
      label3:"required",
      label4:"required",
      label5:"required",
      label6:"required",
      label7:"required",
    },
    // Specify validation error messages
    messages: {
      Name: "Please enter your Name",
      Email: "Please enter a valid email address",
      Number: "Please enter contact number", 
      Message: "Please enter Message",
      label1: "Please enter valid value",
      label2: "Please enter valid value",  
      label3: "Please enter valid value",  
      label4: "Please enter valid value",  
      label5: "Please enter valid value",  
      label6: "Please enter valid value",  
      label7: "Please enter valid value",  
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});



