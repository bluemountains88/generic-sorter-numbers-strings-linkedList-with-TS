import { Sorter } from './Sorter';
import { NumbersCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

console.log('Numbers collection');
const numbersCollection = new NumbersCollection([10, 3, -3, 990, -5, 0]);
console.log(numbersCollection.data);
numbersCollection.sort();
console.log(numbersCollection.data + '\n');

console.log('Characters collection');
const charactersCollection = new CharactersCollection('Xaatynasf');
console.log(charactersCollection.data);
charactersCollection.sort();
console.log(charactersCollection.data + '\n');

console.log('LinkedList');
const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.print();

linkedList.sort();
linkedList.print();
