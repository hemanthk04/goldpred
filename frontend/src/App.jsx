import { useState, useEffect } from "react";
import Button from "./components/button";
import { FaCalendarAlt } from "react-icons/fa";
import { useRef } from "react";

function App() {
  const [value, setValue] = useState(""); // State for the date input

  // Function to handle date input change
  const onChange = (e) => {
    setValue(e.target.value);
  };

  // Function to format the date as YYYY-MM-DD
  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  // Get today's date and one month later
  const today = new Date();
  const oneYearLater = new Date();
  oneYearLater.setFullYear(today.getFullYear() + 1); // ✅ correct

  // Set today's date as the default value when the component mounts
  useEffect(() => {
    setValue(formatDate(today)); // Set today's date as the default value
  }, [today]);

  const dateInputRef = useRef(null);

  return (
    <div
      className="min-h-screen w-full text-black px-8 py-6 flex flex-col items-center"
      style={{
        background: `
      linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.7)),
      repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0px, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 50px),
      repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0px, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 50px)
    `,
        backgroundSize: "50px 50px", // Grid spacing
        backgroundPosition: "center",
      }}
    >
      {/* Header */}
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center space-x-2 text-sm font-medium">
          <div className="w-1 h-5 bg-[#FF7F24]" />
          <p className="text-md font-medium">Gold Price Predictor</p>
        </div>
        <a
          href="https://github.com/hemanthk04"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            className="w-12 h-12"
          />
        </a>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 mt-16 mb-4 text-center w-full max-w-lg mx-auto">
        {/* Gold Price */}
        <h1 className="md:text-[200px] text-7xl leading-none font-[400] text-[#FF7F24] md:mb-4 mb-16 [font-feature-settings:'ss01'] ">
          98,588.24
        </h1>

        {/* Date Box */}
        <div className="flex items-center  font-[400] bg-black text-white pl-6 py-4 rounded-md space-x-2 text-sm">
          <FaCalendarAlt
            className="size-5 cursor-pointer"
            onClick={() => dateInputRef.current?.showPicker()} // triggers native picker
          />
          <input
            ref={dateInputRef}
            type="date"
            value={value}
            onChange={onChange}
            min={formatDate(today)}
            max={formatDate(oneYearLater)}
            className="bg-black text-white"
            style={{
              appearance: "none",
              WebkitAppearance: "none",
              MozAppearance: "none",
              padding: "2px",
              borderRadius: "4px",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          />
        </div>

        {/* Prediction Buttons */}
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 md:space-y-0 space-y-4 mt-10">
          <Button>after 1 week</Button>
          <Button>after 1 month</Button>
          <Button>after 1 year</Button>
        </div>

        {/* Footer */}
      </div>
      <p className="absolute bottom-6 right-8 text-sm font-medium">
        By{" "}
        <span className="underline underline-offset-4">Hemanth Kapalavai</span>
      </p>
    </div>
  );
}

export default App;
