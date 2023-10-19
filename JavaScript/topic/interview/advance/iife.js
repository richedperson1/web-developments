/*

! iife => immediately invoking Function Expression

*/

/*
! Type of the function 
! 1. Anonymous function
! 2. statements function
! 3. Expresion function
! 4. IIFE function
*/

//? When the function immediately invoke just after it created are called as IIFE. Following are the example of the IIFE functions.

firstFun = (function () {
  const first = 10;
  console.log("Hello world");
})();

//* Why are we making IIFE function ?
//! => To create the private varible!
