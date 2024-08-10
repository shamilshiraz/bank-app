function register(){

    // fetch the values from html

     acno=document.getElementById('regaccno').value
     uname=document.getElementById('regname').value
     pswrd=document.getElementById('regpassword').value


    console.log(acno,uname,pswrd);

    // create accntdetails object

    accntdetails={
        acno,
        uname,
        pswrd,
        balance:0
    }


    // check if acno is present in the storage
    if(acno in localStorage){
        alert('User already registered')
    }else{
        // else we set the details in localstorage
        localStorage.setItem(acno,JSON.stringify(accntdetails))

        alert('Registration succesfull')

        window.location('./welcome.html')
    }



}


function login(){

    // fetch the value from html
    uname=document.getElementById('logname').value
    accno=document.getElementById('logaccno').value
    pswrd=document.getElementById('logpassword').value

    console.log(uname,accno,pswrd);




    // check if values are present in storage
    if(acno in localStorage){
        accntdetails=JSON.parse(localStorage.getItem(acno))
        if(pswrd==accntdetails.pswrd){
            alert('login successful')
            window.location('./welcome.html')
        }else{
            alert('incorrect acc details')
        }

    }else{
        alert("Please register first")
        window.location('./register.html')
    }






}