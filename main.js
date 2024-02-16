const login =() => {
 if (usernameInput.value =="" || pswdInput.value =="") {
    alert("Please fill the form Completely!!!")
 }else{
     
      user = usernameInput.value
      localStorage.setItem("user",user)
      //rederict dashboard
      window.location ="dashborad.html"
      alert("Sucessfully login!!")


 }

}