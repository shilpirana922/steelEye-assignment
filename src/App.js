import React from "react";
import List from "./components/List";
const items = [
  {
     text:"Shoes"
  },
  {
    text:"Clothes"
 },
 {
  text:"Accessories"
}
];

function App() {
  return (
    <div>
      <List  items={items}/>
    </div>
  );
}

export default App;
