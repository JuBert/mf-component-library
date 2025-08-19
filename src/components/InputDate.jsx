const InputDate = ({
    label,
    value,
    onChange,
    placeholder,
    name,
    error,
    ...props
}) => (
    <div className="mb-6 w-full">
        {label && (
            <label
                htmlFor={name}
                className="block mb-2 font-medium text-white dark:text-white"
            >
                {label}
            </label>
        )}
        <input
            id={name}
            name={name}
            type="date"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-white border transition-colors duration-200 outline-none
                ${error ? "border-red-500 focus:border-red-400" : "border-[#535bf2] focus:border-[#646cff]"}
                placeholder:text-gray-400`}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
            {...props}
        />
        {error && (
            <p
                id={`${name}-error`}
                className="mt-2 text-sm text-red-500"
            >
                {error}
            </p>
        )}
    </div>
);

export default InputDate;