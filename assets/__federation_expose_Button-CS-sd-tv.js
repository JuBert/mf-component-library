import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';
import useCount from './__federation_expose_Store-BNDOQJpL.js';

const Button = () => {
  const [count, setCount] = useCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      className: "text-green-300",
      onClick: () => setCount(count + 1),
      children: [
        "Clicked ",
        count,
        " times"
      ]
    }
  );
};

export { Button, Button as default };
