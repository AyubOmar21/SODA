function validateForm() 
{
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "" || password === "") 
    {
        alert("Please fill in both fields.");
        return false; // Prevents the form from submitting if fields are empty
    }

    return true; // Allows form submission if both fields are filled
}

function toggleNav() 
{
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('open');
}

