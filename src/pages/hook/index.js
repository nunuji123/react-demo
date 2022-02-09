import UseStateHook from "./useState";
import UseEffectHook from "./useEffect";
import UseContextHook from "./useContext";
export default function App() {
  return (
    <div className="hook">
      <h3>Hook 索引</h3>
      <UseStateHook></UseStateHook>
      <UseEffectHook></UseEffectHook>
      <UseContextHook></UseContextHook>
    </div>
  );
}
