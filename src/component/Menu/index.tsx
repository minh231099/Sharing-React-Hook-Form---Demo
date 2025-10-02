interface MenuProps {
  active: string;
  onChange: (option: string) => void;
}

const Menu: React.FC<MenuProps> = ({ active, onChange }) => {
  const options = [
    "NestedForm",
    "Optional Field",
    "Form Array",
    "Custom Validation",
  ];

  return (
    <div className="flex items-center justify-center">
      <nav className="bg-white shadow-md w-full py-3 px-6 flex gap-6 justify-center">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${
              active === opt
                ? "bg-indigo-600 text-white"
                : "text-gray-700 hover:bg-indigo-100"
            }`}
          >
            {opt}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
