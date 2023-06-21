// retrieving data

function local(){
    var mail = document.getElementById("email").value;
    var pw = document.getElementById("password").value;
    var name = document.getElementById("username").value;
    var database = JSON.parse(localStorage.getItem("db")) || [];
    var user = {name, pw,mail}
    database.push(user);
    //storing data
    localStorage.setItem("db",JSON.stringify(database));
   


//pop up message

// document.getElementById("click") type build
//     onclick("submit successful")
// }

}
