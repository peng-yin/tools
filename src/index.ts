import { chunk } from 'lodash';

chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

const fn = () => {
  var obj1 = {
    name: "james",
    age: 27
  }
  var obj2 = {...obj1};
  console.log(obj2);
}

fn()