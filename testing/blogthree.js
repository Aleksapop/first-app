function getUserData() {
  fetch('https://api.example.com/user')
    .then(response => response.json())
    .then(data => {
      console.log('Podaci o korisniku:', data);
    })
    .catch(error => {
      console.error('Greška pri preuzimanju podataka o korisniku:', error);
    });
}

async function getUserData() {
  try {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    console.log('Podaci o korisniku:', data);
  } catch (error) {
    console.error('Greška pri preuzimanju podataka o korisniku:', error);
  }
}


function getPost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(post => {
      console.log('Naslov posta:', post.title);
    })
    .catch(error => {
      console.error('Greška pri preuzimanju posta:', error);
    });
}

getPost();



async function getPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await response.json();
    console.log('Naslov posta:', post.title);
  } catch (error) {
    console.error('Greška pri preuzimanju posta:', error);
  }
}

getPost();
