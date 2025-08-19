import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';

const InputDate = ({
  label,
  value,
  onChange,
  placeholder,
  name,
  error,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 w-full", children: [
  label && /* @__PURE__ */ jsxRuntimeExports.jsx(
    "label",
    {
      htmlFor: name,
      className: "block mb-2 font-medium text-white dark:text-white",
      children: label
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      id: name,
      name,
      type: "date",
      value,
      onChange,
      className: `w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-white border transition-colors duration-200 outline-none
                ${error ? "border-red-500 focus:border-red-400" : "border-[#535bf2] focus:border-[#646cff]"}
                placeholder:text-gray-400`,
      "aria-invalid": !!error,
      "aria-describedby": error ? `${name}-error` : void 0,
      ...props
    }
  ),
  error && /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      id: `${name}-error`,
      className: "mt-2 text-sm text-red-500",
      children: error
    }
  )
] });

export { InputDate as default };
