import React from "react";

const App: React.FC = () => {
  const darkMode = true;
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="text-center">
        <h1 className="text-[20em] mb-4">Welcome</h1>
        <p className="text-xl">
          This is a minimalistic React app with TailwindCSS. The theme can be
          toggled between dark and light modes.
        </p>
      </div>
    </div>
  );
};

export default App;
