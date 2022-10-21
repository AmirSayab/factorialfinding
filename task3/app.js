function message() {
    var num=prompt();
   if (num<0) {
    alert("ERROR: eNTER vALID nO")
   } else if(num==0) {
    num=1;
    alert(num);
   }
   else{
    let facto=1;
    for (let i = 1; i <= num; i++) {
        facto*=i;
    }
    alert(facto);
   }
}