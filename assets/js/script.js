const inputs = document.querySelectorAll("[required]");

inputs.forEach((input) => {
  input.addEventListener("blur", () => getError(input));
  input.addEventListener("invalid", (event) => event.preventDefault());
});

const typeErrors = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "tooLong",
  "customError",
];

const messages = {
  name: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "O nome deve ter no mínimo 3 caracteres.",
  },
  email: {
    valueMissing: "O campo de email não pode estar vazio.",
    patternMismatch: "Por favor, preencha um email válido.",
    tooShort: "Por favor, preencha um email válido.",
  },

  subject: {
    valueMissing: "O campo assunto não pode estar vazio.",
    patternMismatch: "Por favor, preencha um assuto valido válido.",
    tooShort: "Preencha o assunto com no mínimo 3 caracteres.",
  },
  message: {
    valueMissing: "O campo de mensagem não pode estar vazio.",
    typeMismatch: "Por favor, preencha uma mensagem válida.",
    tooShort: "A mensagem deve ter no mínimo 3 caracteres.",
    tooLong: "A mensagem deve ter no máximo 500 caracteres.",
  },
};

function getError(input) {
  let messageError = "";
  typeErrors.forEach((error) => {
    if (input.validity[error]) {
      messageError = messages[input.name][error];
      input.style.borderBottom = "2px solid #eb4545";
    }
  });
  const errorElement = input.parentNode.querySelector(".error");
  const validityInput = input.checkValidity();
  if (!validityInput) {
    errorElement.textContent = messageError;
  } else {
    errorElement.textContent = "";
    input.style.borderBottom = "2px solid #2A7AE4";
  }
}

const buttonSubmit = document.querySelector("[data-button]");

buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const name = document.querySelector("[data-input='name']");
  const email = document.querySelector("[data-input='email']");
  const subject = document.querySelector("[data-input='subject']");
  const message = document.querySelector("[data-input='message']");
  if (!name.value || !email.value || !subject.value || !message.value) {
    getError(name);
    getError(email);
    getError(subject);
    getError(message);
    Toastify({
      text: "Preencha todos os campos",
      duration: 3000,
      close: true,
      style: {
        background: "#eb4545",
        color: "#F5F5F5",
      },
    }).showToast();
  } else {
    Toastify({
      text: "Mensagem enviada com sucesso!",
      duration: 3000,
      close: true,
      style: {
        background: "#0bb30b",
        color: "#F5F5F5",
      },
    }).showToast();
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  }
});
