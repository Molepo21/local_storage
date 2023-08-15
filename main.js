// retrieving data

function registerUser(e) {
    e.preventDefault();
    var name = document.getElementById("username").value;
    var sur = document.getElementById("surname").value;
    var mail = document.getElementById("email").value;
    var pw = document.getElementById("password").value;

    // Hash and salt the password (bcrypt/Argon2 recommended)
    // var hashedPassword = hashFunction(pw, mail);

    // Store the user data in local storage
    //   localStorage.setItem(name,sur,mail,pw, JSON.stringify({ pw: hashedPassword }));

    var database = []
    database = JSON.parse(localStorage.getItem("db")) || [];
    var user = { name, sur, mail, pw }
    database.push(user);

    //storing data
    localStorage.setItem("db", JSON.stringify(database));

    alert("Registration successful. Please login.");
}

function loginUser(e) {
    e.preventDefault();
    var mail = document.getElementById("email2").value;
    var pw = document.getElementById("password2").value;

    var user = null;
    // Retrieve user data from local storage
    var userData = JSON.parse(localStorage.getItem('db'));
    console.log('result', userData);


    for(let i = 0; i < userData.length; i++){
        // console.log('user',userData[i].mail, userData[i])
        if(userData[i].mail === mail && userData[i].pw === pw){
            user = userData[i]
        }
    }
    if(user){
        alert("Login successful.");
    }else {
            alert("Invalid username or password.");
        }
    // if (userData && userData.pw && userData.mail === hashFunction(pw, mail)) {
    //     alert("Login successful.");
    //     // Perform necessary actions after successful login
    // } else {
    //     alert("Invalid username or password.");
    // }
}

// function hashFunction(pw) {
//     // This is a simple example; do not use in production
//     return pw;
// }

