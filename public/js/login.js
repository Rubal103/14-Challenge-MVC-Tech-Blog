const loginFormHandler = async (event) => {
  event.preventDefault();

  // take username and password values from the login 
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    // if theres is a username and password a POST request will be send to the API routes for the users
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If login is successful, user will be taken to their dashboard
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};



const signupFormHandler = async (event) => {
  event.preventDefault();


  //get username and password from the signup form for new user
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();


  //if there is a username and password, POST request will be send to the API route and user will be redirected to their dashboard. 
  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

  

