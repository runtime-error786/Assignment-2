
let fun1 = (pass) => {
    // Regular expression to check if password contains at least one special character and one numeric character
    let passtest = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9])/;

    // Test the password against the regular expression
    return passtest.test(pass);
}

let fun = ()=>{
    let r1 = document.getElementById("username").value;
    let r2 = document.getElementById("pass").value;
    
    if(r1=="")
    {
        document.getElementById("n1").innerHTML="Please fill fields";
      
    }
    else{
        document.getElementById("n1").innerHTML="";

    }
    if(r2=="")
    {
        document.getElementById("n2").innerHTML="Please fill fields";
    }
    else{
        document.getElementById("n2").innerHTML="";

    }
    if(fun1(r2)==false)
    {
        document.getElementById("n2").innerHTML="password not correct";
    }
    else{
        document.getElementById("n2").innerHTML="";
    }
}

let EmailCheck = (email) => {
    // Regular expression for validating email addresses
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

let gq = ()=>{
    let r1 = document.getElementById("username").value;
    let r2 = document.getElementById("pass").value;
    let r3 = document.getElementById("Cpass").value;
    let r4 = document.getElementById("email").value;
    let r5 = document.getElementById("age").value;
    let r6 = document.getElementById("city").value;
    let r7 = document.getElementById("country").value;
    let r8 = document.getElementById("religion").value;
    if(r1=="")
    {
        document.getElementById("n5").innerHTML="Please fill fields";
      
    }
    else{
        document.getElementById("n5").innerHTML="";

    }
    if(r2=="")
    {
        document.getElementById("n12").innerHTML="Please fill fields";
      
    }
    else{
        document.getElementById("n12").innerHTML="";

    }

    if(r3=="")
    {
        document.getElementById("n6").innerHTML="Please fill fields";
      
    }
    else{
        document.getElementById("n6").innerHTML="";

    }

    if(r4=="")
    {
        document.getElementById("n7").innerHTML="Please fill fields";
      
    }
    else{
        document.getElementById("n7").innerHTML="";

    }

    if(EmailCheck(r4)==true)
    {
        document.getElementById("n7").innerHTML="";
        
    }
    else{
        document.getElementById("n7").innerHTML="Mention correct email";

    }


    if(r5=="")
    {
        document.getElementById("n8").innerHTML="Please fill fields";
      
    }
    else{
        document.getElementById("n8").innerHTML="";

    }
    if(Number(r5)>0)
    {
        document.getElementById("n8").innerHTML="";
      
    }
    else{
        document.getElementById("n8").innerHTML="age is not negative";

    }
    if(r6=="")
    {
        document.getElementById("n9").innerHTML="Please fill fields";
      
    }
    else{
        document.getElementById("n9").innerHTML="";

    }

    if(r7=="")
    {
        document.getElementById("n10").innerHTML="Please fill fields";
      
    }
    else{
        document.getElementById("n10").innerHTML="";

    }

    if(r8=="")
    {
        document.getElementById("n11").innerHTML="Please fill fields";
      
    }
    else{
        document.getElementById("n11").innerHTML="";

    }

    if(fun1(r2)==false)
    {
        document.getElementById("n12").innerHTML="password not correct";
    }
    else{
        document.getElementById("n12").innerHTML="";
    }

    if(r2==r3)
    {
        document.getElementById("n6").innerHTML="";

    }
    else{
        document.getElementById("n6").innerHTML="Password and confirm password are not match";
    }

}