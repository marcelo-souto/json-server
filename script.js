fetch('https://server-marcelo676.herokuapp.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
