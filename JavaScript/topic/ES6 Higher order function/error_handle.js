import { First_module } from "./server.js";

try {
    let zero_div = 4 / 0;
    console.log("Divide by zero is :", zero_div);
    let result = new First_module("Rutvik");
    result.first_fun();
    console.log(result.mobile_num);

}
catch (e) {
    console.log(e);
    console.log("Error Found");
} 