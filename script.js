// API url
const url = "https://jsonplaceholder.typicode.com/users"

// fetch users from url api

function fetchUsers(){
    // make user of browser fetch API
    fetch(url)
    .then( response => response.json())
    .then(data =>{
        // passing the user data to the renderUsers function
        renderUsers(data);
    })

}



// render users in the DOM

function renderUsers(usersData){
    console.log('from render users')
    console.log(usersData);
    const ul = document.getElementById('users-container-list');
      

    // render li tag for each user

    usersData.forEach(user => {
        // console.log(user)
        const li = document.createElement('li');
        li.innerHTML += `
        <span>${user.id}.</span>
        <span>${user.name}</span>
        <span>-</span>
        <span class="bg-blue-500 username rounded p-2">${user.username}</span>
       
        `;
        li.className = "p-3  py-5"

        ul.appendChild(li);
    })
}


// Add a search funtion to the DOM
// const input =  document.getElementById('search');
// input.addEventListener('onkeyup', searchUsersByUsername());

function searchUsersByUsername(){
    // console.log("hello I'm working")
    const input =  document.getElementById('search');
    const ul = document.getElementById('users-container-list');
    const inputValue = input.value.toUpperCase();
    const usersList = ul.querySelectorAll('li');

    // console.log(usersList[2])
    // Loop through all the users and render the ones that match the search
    for(let i = 0; i<usersList.length; i++){
        const usernameSpanTag = usersList[i].querySelector('.username');
        const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
        // console.log();
        const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

        if (isMatch){
            usersList[i].style.display =  "block";
        }else{
            usersList[i].style.display =  "none";

            
        }
        

}




}




// calling the fetch function

fetchUsers();