//JavaScript has 5 Primitive Datatypes
// Numbers
4
9.3
-10 

// Strings(=text)
"Hello World"
"43"

// Booleans
true
false

//null and undefined
null
undefined

//remainder operator
% 

//single or double quotes ok
"hello world"
'hello world'

//concatenation
"charlie" + "brown"

//Escape Chracters start with "\"
//"Singin \"Do wah diddy, diddy, dum diddy do\" "

//Access individual characters using [] and an index
"hello"[0] //"h"

//Quick Exercies
//1.
100 % 3
== 1

//2. 
("blah"+"blah")[6]
== "a"

//3.
"hello".length % "hi\\".length
== 2

//Variables
//variables are simply containers that store values
//They follow this patter:
var yourVariableName = yourValue;

//They can store all of the values we've seen
var name = "Rusty";
var secretNumber = 73;
var isAdorable = true;

//Recall the stored value by calling the variable name
var name = "Rusty";
"Hello there" + name;

var num = 37;
num + 3 + 10 == 50;

//we can also update existing variables;
var name = "Rusty";

//camelCase
//snake_case
//kebab-case(dash-case)

//let vs const vs var

//var
// Scoped to "Current execution context" AKA a variable's enclosing function or the global scope
// Can be reassinged whenever
// Initiallizing with value is optional
// Can be redeclared at any point
// Global variables are added to window

//let
// Block scoped
// Does not create property on global window object
// Initializing w/ value is optional
// Can be reassigned
// Cannot be redecallred(in same scope)

//const
// Cannot be reassigned - Not immutable, but variable reference cannot change
// Block scoped
// Must be initialized with value
// Does not create property on global window object
// Cannot be redeclared (in same scope)
