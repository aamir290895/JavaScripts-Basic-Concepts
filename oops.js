// Object-Oriented Programming (OOP):
// JavaScript supports OOP principles such as encapsulation, inheritance, and polymorphism.
// You can create classes, define methods and properties, and instantiate objects.

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(this.name + ' makes a sound.');
    }
  }
  
class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    speak() {
      console.log(this.name + ' barks.');
    }
  }
  
  var dog = new Dog('Buddy');
  dog.speak(); // Output: Buddy barks.


 class Player {
    constructor(name, age , height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    *play() {

       let score = 100;

        while(true) {
            score ++;
            console.log(`The ${this.name} and age is ${this.age} hits ${score} runs`);
            yield score;

        }

    }
 } 
  
 var player = new Player("kholi" , 32, "180cm");
 const iterator = player.play();

 console.log(iterator.next().value);
 console.log(iterator.next().value);
 console.log(iterator.next().value);