let jsonObj = {
    name : "Dev",
    age : 18,
    friend :"Mavrick",
    drink : "Coffee"
}
console.log(jsonObj);

// to convert into string
    let myJsonStr= JSON.stringify(jsonObj);
    console.log(myJsonStr)
            // now can use all the functions related to string
    myJsonStr = myJsonStr.replace("Dev","Mani")
    console.log(myJsonStr)

//converting to object

newJsonObj = JSON.parse(myJsonStr);
console.log(newJsonObj)