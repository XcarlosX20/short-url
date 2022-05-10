let message;
const divResult = document.querySelector("#result");
const form = document.querySelector("#addUrl");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const urlOriginal = document.querySelector("#urlOriginal").value;
  const res = await fetch(e.target.action, {
    method: e.target.method,
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ urlOriginal }),
  });
  JSON.stringify({ urlOriginal });
  divResult.innerHTML = await "<p>loading</p>";
  const response = await res.json();
  if (response.code === 201) {
    let message = `<p>url has been shortened correctly. Visit this link: <a target="_blank" href="/${
      response.url
    }">${form.action + response.url}</a></p>`;
    divResult.innerHTML = message;
    divResult.className = "result";
  } else {
    let message = `<p>There was a mistake</p>`;
    divResult.classList.add("error");
    divResult.innerHTML = message;
  }
});
