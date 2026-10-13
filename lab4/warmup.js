// prediction: "g3" 
console.log("7" + 3);
// surprised? why: I thought it would concatenate the string and just write the number 3

// prediction: d
console.log("7" - 3);
// surprised? why: I thougt it would subtract the number 3 from the string "7" 

// prediction: 10a
console.log(7 + 3 + "1");
// surprised? why: i thought it would add 7 and 3 and then concatenate the string "1" to the result

// prediction: n
console.log("7" * "2");
// surprised? why: I thought it would multiply the strings

// prediction: 3.3333...
console.log(10 / 3);

// prediction: boolean
console.log(typeof null);

// prediction: boolean
console.log(typeof NaN);

// prediction: false
console.log(Boolean("false"));
// surprised? why: I didn't think that the string "false" would be considered true in a boolean context

// prediction: true
console.log(Boolean("0"));

// prediction: "fallback"
console.log(0 || "fallback");

// prediction: "fallback"
console.log(0 ?? "fallback"); 

// prediction: "empty"
console.log("" || "empty");

// prediction: true
console.log("10" == 10);

// prediction: true
console.log("10" === 10);
// surprised? why: I thought it would be the same as == and return true, but is not because === checks for type as well

// prediction: no idea
console.log(Number("12abc"));

// prediction: 12
console.log(parseInt("12abc"));

// prediction: "hi"
console.log(" hi ".trim());

// prediction: true
console.log("cat".includes("a"));