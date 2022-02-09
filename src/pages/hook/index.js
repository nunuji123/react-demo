import UseStateHook from "./useState";
import UseEffectHook from "./useEffect";
import UseContextHook from "./useContext";
import UseReducerHook from "./useReducer";
export default function App () {
  return (
    <div className="hook">
      <h3>Hook 索引</h3>
      <UseReducerHook></UseReducerHook>
      <UseStateHook></UseStateHook>
      <UseEffectHook></UseEffectHook>
      <UseContextHook></UseContextHook>
    </div>
  );
}
