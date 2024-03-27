document.getElementById('studentForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  const formData = new FormData(this);
  const studentDetails = {
    name: formData.get('name'),
    email: formData.get('email'),
    age: formData.get('age')
  };
  
  // Send student details to Gmail
  sendEmail(studentDetails);

  // Reset form fields
  this.reset();
});

function sendEmail(details) {
  const { name, email, age } = details;
  const subject = 'New Student Details';
  const body = `Name: ${name}\nEmail: ${email}\nAge: ${age}`;
  const mailtoLink = `mailto:fullfaithfoundation+admission@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Open default email client with pre-filled details
  window.open(mailtoLink);
}
