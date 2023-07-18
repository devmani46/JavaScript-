let myArr = ["Water","Fire",55,null,true]

//ArrayMethods
    //length
    console.log(myArr.length);

    //remove last element
    myArr.pop();
    console.log(myArr);

    //add an element
    myArr.push("ME");
    console.log(myArr);

    //remove first element
    myArr.shift();
    console.log(myArr);

    //new length
    const newLen= myArr.unshift("ME")
    console.log(newLen)
    console.log(myArr);

    /*
    //convert all element to string
    myArr.toString()
    */


//JAVASCRIPT ARRAY METHOD REFERENCE(MDN)