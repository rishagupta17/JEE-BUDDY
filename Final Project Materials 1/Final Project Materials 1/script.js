document.addEventListener('DOMContentLoaded', (event) => {
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', () => {
        window.location.href = 'login.html'; 
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const registrationButton = document.getElementById('registrationButton');
    registrationButton.addEventListener('click', () => {
        window.location.href = 'registration.html'; 
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const Contact1= document.getElementById('Contact1');
    Contact1.addEventListener('click', () => {
        window.location.href = 'contact.html'; 
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent the default form submission
      alert('Login successful!');
      // Here, you can add code to actually perform the login, like sending data to the server
      window.location.href = 'index2.html'; 
    });
  });
