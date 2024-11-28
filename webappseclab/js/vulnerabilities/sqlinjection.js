async function handleSQLInjectionLogin(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
  
      const result = await response.json();
      const loginResult = document.getElementById('login-result');
  
      if (response.ok) {
        loginResult.innerText = result.message;
        loginResult.style.color = 'green';
      } else {
        loginResult.innerText = result.message;
        loginResult.style.color = 'red';
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  