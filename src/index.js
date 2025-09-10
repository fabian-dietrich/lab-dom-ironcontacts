// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

threeContacts.forEach((aContact) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>
    <img src="${aContact.pictureUrl}" />
  </td>
  <td> ${aContact.name} </td>
  <td> ${aContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `;

  // ITERATION 2 - Delete Buttons

  // Your code goes here ...

  const deleteBtn = newRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", function () {
    newRow.remove();
  });

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  const likeBtn = newRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", function () {
    likeBtn.classList.toggle("selected");
    console.log(newRow.classList);
  });

  tableBody.appendChild(newRow);
});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

buttonAddRandom.addEventListener("click", function () {
  if (contacts.length > 0) {
    const newNewRow = contacts.splice(0, 1);
  } else {
    console.log("there are no contacts left!");
  }
});
