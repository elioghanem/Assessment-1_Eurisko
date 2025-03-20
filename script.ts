//ex1:

function reverseString(str : string):String {
    let newStr : string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseString("hello"));


//ex 2:

function countVowels(str:string):number{
    let count=0;//counter for the vowels
    for(let i=0; i<str.length; i++){
        
        if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
            count++;
        }
    }
    return count;
}
console.log(countVowels("typescript"))
//ex3:

function findMissingNumber(arr: number[]): number {
    let missingNumber: number =0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + arr[0]) {   // we check if the next number is not the following one
            missingNumber = i + arr[0]; 
            break; // when the missing number is found we stop the loop
        }
    }
    return missingNumber;
}

console.log(findMissingNumber([1, 2, 4, 5, 6]))

//ex4:


function firstNonRepeatingChar(str: string): string | null{
    let repeatingChar: string = ""; 
    for (let i = 0; i < str.length; i++) {
        let foundRepeat = false; //to check is there is a repeat character
        for (let j = i+1; j < str.length; j++) {
            if (str[i] === str[j]) {  
                foundRepeat = true;
                break;  // Exit the inner loop once a repeat is found
            }
        }
        if (!foundRepeat) { //for the character that is non repeat we initialize the repeatingChar to the character
            return str[i]
        }
    }
    return null; 
}
console.log(firstNonRepeatingChar("racecar")); 


//ex5:

function deepEqual(obj1: any, obj2: any): boolean {
    
    if (obj1 === obj2) {
        return true;
    }
    // check if the obj is type of object or if its null
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }
    // we get the keys
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    // Compare each key-value pair recursively
    for (let key of keys1) {
        // Check if the keys are present in both objects
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {// we check if the values of the keys are equal
            return false; // If the key is not present in both objects
        }      
    }

    return true;
}

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false

// Test object how to get the keys
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for (let key in person) {
    console.log(key);  
}



//ex6:


class LRUCache{
    private capacity;
    private cache;
    constructor(capacity:number){
        this.capacity=capacity;
        this.cache=new Map();
    }
    get(key: number): number | null {
        if(!this.cache.has(key)){
            return -1  //key does not exist
        }
        //we initialize the temp to the key 
        let temp=this.cache.get(key);
        // we give the temp the value of the key
        this.cache.set(key,temp);
        return temp;
        }
    put(key: number, value: number): void {
        //if the key exist we throw an error that the key exist
            if(this.cache.has(key)){
               console.log(`Key ${key} already exists in the cache!`)
            }
            // now we set the key and the value for the key
            this.cache.set(key,value);
            // now we delete when the size of the capacity has been beyond the limit
            if (this.cache.size > this.capacity) {
                const firstKey = this.cache.keys().next().value;  
                this.cache.delete(firstKey); 
            }
        }
}
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.put(2,2);
console.log(cache.get(1)); 
console.log(cache.get(2));
cache.put(3, 3);
console.log(cache.get(2));
console.log(cache.get(3));



//ex:7

class TaskManager {
    private tasks: { id: number; name: string; status: string }[] = [];
    private currentId: number = 1;// we start the id by one when the first id is created the id will be 1
    addTask(name: string): void {
        const newTask = { //we create a object and put all the infon in it
            id: this.currentId++, 
            name: name,
            status: "pending" 
        };
        this.tasks.push(newTask); // we push this new object in the array
    }
    completeTask(id: number): void {
       
        for (let task of this.tasks) { //we loop into all the tasks
            if (task.id === id) { //we check if the id of one of the task exist
                task.status = "completed";// we replace the status of the task by the statment "completed"
            }
        }
        
        // If no task is found we send an message taks with this specific id is not found
        console.log(`Task with ID ${id} not found.`);
    }
    displayTasks(): void {
        for(let task of this.tasks){ // we loop every tesk in the array list tasks and we console.log it
            console.log(`Id: ${task.id}, Name: "${task.name}", Status: "${task.status}"`);
        }
    }
}


const taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.completeTask(1);
taskManager.addTask("Learn javascript");
taskManager.addTask("Learn react native");
taskManager.completeTask(3);
taskManager.displayTasks(); 


