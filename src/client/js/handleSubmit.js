// import the required library
import axios from "axios";
import { validate } from "./checkURL";

// declare variable
const input = document.querySelector("form input");
const form = document.querySelector("#myForm");
const errorHolder = document.querySelector("#error");
const resultHolder = document.querySelector("#results");
const agreement = document.getElementById("agreement");
const subjectivity = document.getElementById("subjectivity");
const confidence = document.getElementById("confidence");
const irony = document.getElementById("irony");
const score_tag = document.getElementById("score_tag");

// show or hide the error once the dom is loaded
document.addEventListener("DOMContentLoaded", () => {
  input.addEventListener("change", (e) => {
    e.preventDefault();
    errorHolder.style.display = "none";
    // hide_error();
    // display_result(false);
  });
});

const handleSubmit = async (e) => {
  e.preventDefault();

  if (input.value == "") {
    alert("please enter a valid URL , Don't leave it blank");
    return;
  }

  // export url validate function
  if (!validate(input.value)) {
    show_error();
    errorHolder.innerHTML = "Please, Enter a valid URL";
    input.value = "";
    return;
  }

  const { data } = await axios.post("http://localhost:8000/", form, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { msg, sample } = data;
  console.log(data);

  // if there is a message that means this is not a valid link
  if (msg) {
    show_error(msg);

    return;
  }
  // in case of succefull call there will be a returned sample
  show_result(sample);
};

const show_error = (error) => {
  errorHolder.style.display = "block";
  resultHolder.style.display = "none";
  errorHolder.innerHTML = error;
};

const show_result = (sample) => {
  errorHolder.style.display = "none";
  resultHolder.style.display = "block";
  agreement.innerHTML = `Agreement: ${sample.agreement}`;
  subjectivity.innerHTML = `Subjectivity: ${sample.subjectivity}`;
  confidence.innerHTML = `Confidence: ${sample.confidence}`;
  irony.innerHTML = `Irony: ${sample.irony}`;
  score_tag.innerHTML = `Score Tag: ${sample.score_tag}`;
};

export { handleSubmit };
