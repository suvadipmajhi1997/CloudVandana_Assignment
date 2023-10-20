const form = document.getElementById('surveyForm');
    const submitButton = document.getElementById('submitButton');
    const resetButton = document.getElementById('resetButton');
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');
    const closePopup = document.getElementById('closePopup');

    // Add an event listener to the submit button
    submitButton.addEventListener('click', function () {
   
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const dob = document.getElementById('dob').value;
      const country = document.getElementById('country').value;
      const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(input => input.value);
      const profession = document.getElementById('profession').value;
      const email = document.getElementById('email').value;
      const mobile = document.getElementById('mobile').value;

      // Display the results in the popup
      popupContent.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender.join(', ')}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
      `;

      // Show the popup
      popup.style.display = 'block';
    });

    // Add an event listener to the reset button
    resetButton.addEventListener('click', function () {
      form.reset();
    });

    // Add an event listener to close the popup
    closePopup.addEventListener('click', function () {
      popup.style.display = 'none';
      form.reset();
    });