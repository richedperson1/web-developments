var Ele = document.getElementById("Rutvik_events")

console.log(Ele)


/*  
Method 1 

Adding Event using addEventListener method

In this method we can we used external function to run the script 
This method is used when we save line of code

*/

const heelo = () => {
    alert("Not founds");
}

// Ele.addEventListener("click", heelo)


/*  
Method 2

Adding Event using varible it self 

*/

Ele.onclick = () => {
    alert("Hello world, I am using varible it self");
}