/*

Promise 

1. It's immutable
2. Placeholder for upcoming data
3. represent state of operation 
    Ex. Pending, Fullfilled, Rejected

    
*/



const URL = "https://api.github.com/user/richedperson1"
// let gitHubaction = fetch(URL)





function printT(cart) {
    let pr = new Promise(function (resolve, reject) {

        if (!checkCart(cart)) {
            let error = new Error("Not found")
            reject(error);
        }
        resolve("569");

    })
    return pr;

}

var checkCart = (cart) => {
    return true;
}


let arr = [1, 2, 3]


let helloworld = printT(arr)

helloworld.then(function (orderId) {
    console.log(orderId);
    return orderId;
})
    .then(function (oderID) {
        return paymentMethod(oderID)
    })
    .then(function (payment) {
        console.log("Payment status : ", payment);
    })




function paymentMethod(oderID) {
    return new Promise(function (resolve, reject) {
        resolve("PaymentDone " + oderID);
    })
}


