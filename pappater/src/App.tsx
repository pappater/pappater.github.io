import React from "react";
import "./index.css";
import { data, socialLinks } from "./config";

const App: React.FC = () => {
  return (
    <div className="m-5 p-5">
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl m-0 font-black mb-20">
        pratheesh.
      </h1>
      {data.map((item, index) => (
        <a
          key={index}
          href={item.url || "#"}
          className=""
          rel="noopener noreferrer"
          target="_blank"
        >
          {/* First Column (Title) */}
          <div className="font-semibold text-4xl sm:text-5xl md:text-6xl hover:underline">
            -{item.title}
          </div>

          {/* Second Column (Description) */}
          <div className="text-base sm:text-lg md:text-xl">{item.desc}</div>
        </a>
      ))}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default App;
