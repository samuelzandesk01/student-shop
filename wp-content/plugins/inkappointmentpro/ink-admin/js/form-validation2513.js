// Wait for the DOM to be ready
jQuery(document).ready(function() {
  // Initialize form validation on the ink-form form.
  // It has the name attribute "ink-form"
 jQuery("form[name='ink-form']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      fname: "required",    
      aptemail:"required",
      aptphone:"required",
      service_select:"required",
      time:"required",
      aptcal:"required",
      label1:"required",
      label2:"required",
      label3:"required",
      label4:"required",
      label5:"required",
    },
    // Specify validation error messages
    messages: {
      fname: "Please enter your name",
      aptemail: "Please enter a valid email address",
      aptphone: "Please enter contact number",
      service_select: "Please select any service",
      time: "Please select valid date and time",
      aptcal: "Please pick a date",     
      label1: "Please enter valid value",
      label2: "Please enter valid value",  
      label3: "Please enter valid value",  
      label4: "Please enter valid value",  
      label5: "Please enter valid value",  
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});