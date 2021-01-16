import Parse from 'parse'

async function logIn(username, password) {
    try {
        var user = await Parse.User.logIn(username, password, { usePost: true });
        if (user) {
            return true;
        } else {
            return signUp(username, password);
        }
    } catch(e) {
        console.log('error >> ', e);
    }
}

async function signUp(username, password, email) {
    try {
        const user = new Parse.User();
        user.set("username", username);
        user.set("password", password);
        user.set("email", email);

        try {
            await user.signUp();
            // Hooray! Let them use the app now.
        } catch(error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }
        return user;
    } catch(e) {
        console.log('error >> ', e);
    }
}

export {signUp, logIn};