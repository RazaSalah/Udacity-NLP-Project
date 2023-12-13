import "./styles/style.scss";
// import "./styles/base.scss";
// import "./styles/footer.scss";
// import "./styles/form.scss";
// import "./styles/header.scss";
// import "./styles/resets.scss";

import { handleSubmit } from "./js/handleSubmit";
import _ from "lodash";

export { handleSubmit };

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
