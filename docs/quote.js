const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".quote-btn");
const closeButton = document.querySelector("dialog .close-btn");
const quoteForm = document.querySelector("dialog form");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

const quoteSuccess = () => {
  quoteForm.reset();
  alert("Your request for a quote was successfully submitted");
  dialog.close();
};

const quoteError = () => {
  alert(
    "There was a problem submitting your quote, you may have to send your request by email instead.",
  );
};

quoteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    _replyto: document.querySelector("input[name=_replyto]").value,
    message: document.querySelector("textarea[name=message]").value,
    _gotcha: document.querySelector("input[name=_gotcha]").value,
  };
  fetch(quoteForm.action, {
    method: quoteForm.method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(quoteSuccess)
    .catch(quoteError);
});
