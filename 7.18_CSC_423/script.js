// Your solution goes here 

function isStrongPassword(pwd){
    if (isLength(pwd) && containsPassword(pwd) && containsUppercase(pwd))
        return true;
    else
        return false;
}

function isLength(pwd){
    if (pwd.length >= 8)
        return true;
    else
        return false;
}

function containsPassword(pwd){
    if (pwd.includes("password"))
        return false;
    else
        return true;
}

function containsUppercase(pwd){
    if (pwd.match(/[A-Z]/))
        return true;
    else
        return false;
}
