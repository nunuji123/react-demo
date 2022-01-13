import ParentClass from "./component/Parent/ClassParent";
import FuncParent from "./component/Parent/FuncParent";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ParentClass></ParentClass>
      <FuncParent></FuncParent>
    </div>
  );
}
