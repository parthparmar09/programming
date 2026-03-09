function* generateColors() {
    yield "red";
    yield "green";
    yield "blue";
  }
  
  function* generateItems() {
    yield "item 1";
    yield* generateColors(); // Delegation to another generator
    yield "item 2";
  }
  
  const iterator = generateItems();
  
  console.log(iterator.next()); 
  console.log(iterator.next()); 
  console.log(iterator.next()); 
  console.log(iterator.next()); 
  console.log(iterator.next()); 
  console.log(iterator.next()); 
  