 function _if(bool, func1, func2) {
  // since bool is true make an if statement 
  if(bool){
    //if its true log the first argument
    console.log(func1())
  }
   //if false log the second argument
   else{
    console.log(func2())
  }

}
