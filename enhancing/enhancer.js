module.exports = {
  succeed,
  fail,
  repair,
};

//success test
function succeed(name, enhancement, durability) {
  let newItem = { name, enhancement, durability };
  if (enhancement < 20) {
    return { ...newItem, enhancement: enhancement + 1}
  } else if ( enhancement === 20) {
    return newItem;
  }

  if (enhancement > 20) {
    throw new Error("Enhancement can't be greater than 20")
  }
  return newItem
}
//success test

function fail({ name, enhancement, durability }) {
  let newItem = { name, enhancement, durability };

  if (enhancement < 15 ) {
    return { durability: durability -5 }
  } else if (enhancement > 16) {
    return { durability: durability -1 }
  } else if (enhancement >= 15) {
    return { durability: durability -10 }
  }
  return newItem;
}

function repair(item) { 
  const newItem = { ...item, durability: 100}//returns a new item 
  return newItem;                            //spread operator to call the item as a new object with the durability restored
} //return the new item

