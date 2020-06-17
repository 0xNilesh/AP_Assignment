function validate() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const simpleEmailRegex = /\S+@\S+\.\S+/;
    
    if(firstName.value.trim() == "") {
        firstName.style.borderBottom = "solid 1px red";
        alert('Blank First name');
        console.log('Invalid');
        return false;
    }
    else if(lastName.value.trim() == "") {
        firstName.style.borderBottom = "solid 1px #55c57a";
        lastName.style.borderBottom = "solid 1px red";
        alert('Blank Last name');
        return false;
    }
    else if(email.value.trim() == "" || !simpleEmailRegex.test(email.value)) {
        firstName.style.borderBottom = "solid 1px #55c57a";
        lastName.style.borderBottom = "solid 1px #55c57a";
        email.style.borderBottom = "solid 1px red";
        alert('Invalid Email');
        return false;
    }
    else if(password.value.length < 8) {
        firstName.style.borderBottom = "solid 1px #55c57a";
        lastName.style.borderBottom = "solid 1px #55c57a";
        email.style.borderBottom = "solid 1px #55c57a";
        alert("Password must be of 8 characters");
        return false;
    }
    else {
        return true;
    }
}