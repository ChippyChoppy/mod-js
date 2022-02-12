// Nesting conditionals!
    // we can nest as many as we want!

let password = "kitty3";

if(password.length >= 6) {
    if(password.indexOf(' ') === -1) {
        console.log("Valid Password")
    } else {
        console.log("password cannot contain spaces")
    }
} else {
    console.log("Password must be longer!");
}

let mystery = 5;
if (mystery) {
    console.log('truthy');
} else {
    console.log('falsy')
}

// falsy values:
    /**
     * false
     * 0
     * "" (empty string)
     * null
     * undefined
     * NaN
     * 
*** EVERYTHING ELSE IS TRUTHY! *** 
     */