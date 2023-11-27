import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [sidebar, setSidebar] = useState(false);
  console.log(sidebar);
  const handleSide = () => {
    setSidebar(true);
    if (sidebar) {
      setSidebar(false);
    }
  };

  return (
    <div
      className={`grid transition-all  ${
        sidebar ? "grid-cols-[0%_100%]" : "grid-cols-[20%_80%]"
      }`}
    >
      <div className="bg-black text-gray-50 h-screen">xxxxxxxxxxxxxxxxx</div>
      <div className="bg-gray-500 h-screen flex">
        <span
          className=" px-2 self-center cursor-pointer text-4xl hover:text-red-700"
          onClick={handleSide}
        >
          {sidebar ? (
            <FontAwesomeIcon icon={faCaretRight} />
          ) : (
            <FontAwesomeIcon icon={faCaretLeft} />
          )}
        </span>
        <div className=" w-[100%]">
          <div>ChatGPT 3.5</div>
          <div className="h-[90%] flex justify-center items-center">
            <div>How can I help you today?</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
