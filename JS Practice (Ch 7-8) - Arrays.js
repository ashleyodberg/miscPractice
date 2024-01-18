let emptyArray = [];
//let programmingLanguages = ["JavaScript", "Python", "Java", "C#"];

let programmingLanguages = [
    "JavaScript", //index 0
    "Python", //index 1
    "Java", //index 2
    "C#" //index 3
];

console.log(emptyArray);
console.log(programmingLanguages);

console.log(emptyArray.length);
console.log(programmingLanguages.length);
 
let grabBag = ["A string value", true, 99, 105.5];
console.log(grabBag);
 
let classes = ["science, computer, art"];
let teachers = ["Jones", "Willoughby", "Rhodes"];
console.log(classes); //shows the classes array has just one item - a string w multiple class names separated w commas
console.log(teachers); //array has 3 items

/*let programmingLanguages = [
    "JavaScript", //index 0
    "Python", //index 1
    "Java", //index 2
    "C#" //index 3
];*/
console.log(programmingLanguages[0]);
console.log(programmingLanguages[3]); 

//What will happen when index 4 is requested?
console.log(programmingLanguages[4]);
//it will return undefined to the console

let javaScriptFrameworks = ["React", "Angular", "Ember"];
console.log(javaScriptFrameworks);

// Set the value of index 2 to be "Vue"
javaScriptFrameworks[2] = "Vue";

// Notice the value at index 2 is now "Vue"
console.log(javaScriptFrameworks);


let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);


/*let shuttleCrews = [
    ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
    ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
    ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
];

console.log(shuttleCrews[0][2]);
console.log(shuttleCrews[1][1]);
console.log(shuttleCrews[2][1]);
*/
	
let shuttleCrews = [
    ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
    ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
    ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
];

let newCrew = ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham'];

// Add a new crew array to the end of shuttleCrews
shuttleCrews.push(newCrew);
console.log(shuttleCrews[3][2]);

// Reverse the order of the crew at index 1
shuttleCrews[1].reverse();
console.log(shuttleCrews[1]);