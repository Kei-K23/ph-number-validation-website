import { COUNTRY_LIST } from "./phoneNumber";

// select form element from DOM
const form_submit = document.querySelector("#form_submit");
const selectEle = form_submit.querySelector("#code");
const placeholder_for_fetchData = document.querySelector(
  "#placeholder_for-fetchData"
);

const header = new Headers();
header.append("apikey", "ghXV2dbLAl3CshgWW7GXvWPSG4LhfnFR");

const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: header,
};

// produce option elements
function displayOptionEle(value, name) {
  const ele = document.createElement("option");
  ele.setAttribute("value", value);
  ele.innerText = `${name} (+${value})`;
  return ele;
}

function displayFetchData(data, checkedNumber) {
  // clear data
  document.querySelector(".display_header").innerText = "";
  document.querySelector(".valid b").innerText = "";
  document.querySelector(".carrier b").innerText = "";
  document.querySelector(".country_name b").innerText = "";
  document.querySelector(".international_format b").innerText = "";
  document.querySelector(".local_format b").innerText = "";
  document.querySelector(".line_type b").innerText = "";

  document.querySelector(".display_header").innerText = `${checkedNumber} is ${
    data.valid ? "valid" : "invalid"
  } phone number`;
  document.querySelector(".valid b").innerText = data.valid ?? "invalid";
  document.querySelector(".carrier b").innerText = data.carrier ?? "unknown";
  document.querySelector(".country_name b").innerText =
    data.country_name ?? "unknown";
  document.querySelector(".international_format b").innerText =
    data.international_format ?? "unknown";
  document.querySelector(".local_format b").innerText =
    data.local_format ?? "unknown";
  document.querySelector(".line_type b").innerText =
    data.line_type ?? "unknown";
}

COUNTRY_LIST.map((country) => {
  selectEle.appendChild(displayOptionEle(country.phone, country.name));
});

// add event to form element
form_submit.addEventListener("submit", async (e) => {
  e.preventDefault();

  const code = form_submit.elements["code"].value;
  const phoneNumber = form_submit.elements["phone_number"].value;
  const combineCodeAndNumber = `${code}${phoneNumber}`;
  await fetchData(combineCodeAndNumber, phoneNumber);

  form_submit.reset();
});

// options request data

async function fetchData(number, checkedNumber) {
  try {
    document.querySelector("#search-btn").disabled = true;
    document.querySelector("#spinner-icon").classList.remove("hidden");
    document.querySelector("#spinner-icon").classList.add("block");
    document
      .querySelector("#placeholder_for-fetchData")
      .classList.remove("block");
    document
      .querySelector("#placeholder_for-fetchData")
      .classList.add("hidden");

    const reqData = await fetch(
      `https://api.apilayer.com/number_verification/validate?number=${number}`,
      requestOptions
    );
    const responseData = await reqData.json();

    displayFetchData(responseData, checkedNumber);
  } catch (err) {
    console.error("Error occur :", err);
  } finally {
    document.querySelector("#search-btn").disabled = false;
    document.querySelector("#spinner-icon").classList.remove("block");
    document.querySelector("#spinner-icon").classList.add("hidden");
    document
      .querySelector("#placeholder_for-fetchData")
      .classList.remove("hidden");
    document.querySelector("#placeholder_for-fetchData").classList.add("block");
    scrollBy(0, placeholder_for_fetchData.clientHeight);
  }
}
