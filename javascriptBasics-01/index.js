const form = document.getElementById("form");
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const age = document.getElementById("age");
  const listDiv = document.getElementById("listDiv");
  const userDiv = document.createElement("DIV");
  userDiv.classList.add("user");
  userDiv.innerHTML = `
    <p class="user-name">Name: ${name.value}</p>
    <p class="user-age">Age: ${age.value}</p>
  `
  form.reset();
  return listDiv.appendChild(userDiv);
});
