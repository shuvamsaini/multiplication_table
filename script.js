var num = prompt("Enter the Number");
document.write("The Multiplication Table of " + num + " is as below:<br>");



for(let i = 1; i<=10; i++){
        var result = num*i;
        document.write(num + "*" + i + "=" + result + "<br>");
}
