import { v4 as uuidv4 } from "uuid";

const profileSlider = [
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
];

export default profileSlider;

// const [candidates, setCandidates] = useState([
//     {name: 'Person1', age: 20, location: 'New York'},
//     {name: 'Person2', age: 20, location: 'New York'},
//     {name: 'Person3', age: 20, location: 'New York'},
// ])
// const swiped = (direction, nameToDelete) => {
//     console.log('removing: ' + nameToDelete)    
// }
// const outOfFrame = (name) => {
//     console.log(name + ' left the screen!')
// }