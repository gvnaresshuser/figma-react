import { useEffect, useState } from "react";

import AwesomeComponent from "./AwesomeComponent";
import TravelApp5 from "./TravelApp5";

function App() {

  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {

    const choice = window.prompt(
      "Enter:\n1 for AwesomeComponent\n2 for TravelApp5"
    );

    setSelectedApp(choice);

  }, []);

  return (
    <>

      {/* SHOW COMPONENT BASED ON CHOICE */}

      {selectedApp === "1" && <AwesomeComponent />}

      {selectedApp === "2" && <TravelApp5 />}

      {/* INVALID INPUT */}
      {selectedApp !== null &&
        selectedApp !== "1" &&
        selectedApp !== "2" && (

          <div className="min-h-screen flex items-center justify-center text-2xl">
            Invalid Choice
          </div>

        )}

    </>
  );
}

export default App;