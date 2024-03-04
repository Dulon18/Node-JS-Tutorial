class Person {
    constructor (name, address,) {
        this.name = name
        this.phrase = address
    }
    get_info = () => console.log(`I'm  ${this.name}.I'm from ${this.address}`)
  
}
const obj = new Person("Lien", "New York");
obj. get_info();
