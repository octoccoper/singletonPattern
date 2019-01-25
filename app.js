const Singleton = (function () {

  let instance;

  function createInstance() {
    const object = new Object({
      id: 1,
      name: "Fluffy"
    });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      } 
      return instance;
    }
  }
})();

let firstInstance = Singleton.getInstance();
let secondInstance = Singleton.getInstance();

console.log(firstInstance);
console.log(secondInstance);
console.log(firstInstance === secondInstance);