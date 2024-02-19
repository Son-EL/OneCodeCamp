function getUserData(callback) {
   
    let user = {
        id: 1,
        username: "john_doe",
        email: "john@example.com"
    };

   
    callback(user);
}


function displayUserData(user) {
    console.log("User ID:", user.id);
    console.log("Username:", user.username);
    console.log("Email:", user.email);
}

getUserData(displayUserData);
