class Bird {
  fly() {
    console.log('Bird flies');
  }
}

class Airplane {
  fly() {
    console.log('Airplane flies');
  }
}

function makeThingsFly(obj) {
  obj.fly();
}

const bird = new Bird();
const airplane = new Airplane();

makeThingsFly(bird); // Output: Bird flies
makeThingsFly(airplane); // Output: Airplane flies


  //In this example, different objects are treated similarly, even though they belong to different classes. 
  //This is the essence of polymorphism - the ability to treat objects of different classes through a common interface. 
  //In Node.js, you can apply these principles to build flexible and reusable code.
