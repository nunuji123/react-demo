import UseStateHook from "./useState";
import UseEffectHook from "./useEffect";
import CountClass from "../classDemo/countClass";
export default function App() {
  return (
    <div className="hook">
      <CountClass></CountClass>
      <UseStateHook></UseStateHook>
      <UseEffectHook></UseEffectHook>
    </div>
  );
}
