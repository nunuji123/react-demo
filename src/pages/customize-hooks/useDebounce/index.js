import { useState } from "react";
import useDebounce from "../../../utils/customize-hooks/useDebounce";
export default function UseDebounceTester() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [cancel] = useDebounce(
    () => {
      console.log("a :>> ", a);
      setB(a);
    },
    3000,
    [a]
  );
  const changeIpt = (e) => {
    setA(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        onChange={changeIpt}
      />
      <h3>a: {a}</h3>
      <h3>b: {b}</h3>
    </div>
  );
}
