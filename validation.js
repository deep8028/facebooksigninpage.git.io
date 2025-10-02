$(document).ready(function() {
  $('#signup').validate({
    rules: {
      fname: {
        required: true,
        minlength: 2
      },
      sname: {
        required: true,
        minlength: 2
      },
      mobile: {
        required: true,
        minlength: 10
      },
      password: {
        required: true,
        minlength: 8
      },
      Date: {   // fixed (was "day")
        required: true
      },
      months: { // fixed (was "month")
        required: true
      },
      year: {
        required: true
      },
      gender: {
        required: true
      }
    },
    messages: {
      fname: "Please enter your first name",
      sname: "Please enter your surname",
      mobile: "Enter a valid mobile number or email",
      password: "Password must be at least 8 characters",
      Date: "Select date",
      months: "Select month",
      year: "Select year",
      gender: "Please select gender"
    }
  });
});
