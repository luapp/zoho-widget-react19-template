import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const registerZohoListeners = (setZohoId) => {
  ZOHO.embeddedApp.on("PageLoad", function (data) {
    console.log("PageLoad data", data);
    setZohoId(data.EntityId);
  });
  ZOHO.embeddedApp.init();
};

const RootComponent = () => {
  const [zohoId, setZohoId] = useState(undefined);

  React.useEffect(() => {
    registerZohoListeners(setZohoId);
  }, []);

  return (
    <React.StrictMode>
      <App zohoId={zohoId} />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RootComponent />);
