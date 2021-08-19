import HOC_One from "./Components/HOC_One";
import HOC_Two from "./Components/HOC_Two";
import MyComponent from "./Components/MyComponent";

function App() {
  return (
    <div>
      <HOC_One cmp = {MyComponent}></HOC_One>
      <br/>
      <br/>
      <HOC_Two cmp = {MyComponent}></HOC_Two>
    </div>
  );
}

export default App;
