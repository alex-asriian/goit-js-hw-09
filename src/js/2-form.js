let formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".feedback-form");
const storageKey = "feedback-form-state";
const data = localStorage.getItem("feedback-form-state");
if (data) {
    const savedData = JSON.parse(data);
    formData = savedData;
    form.elements.email.value = savedData.email;
form.elements.message.value = savedData.message;
}
form.addEventListener("input", (event) => {
    const name = event.target.name;
    const value = event.target.value.trim()     ;
    formData[name] = value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

  


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const trimmedData = {
    email: formData.email.trim(),
    message: formData.message.trim(),
  };
    if (trimmedData.email === "" || trimmedData.message === "") {
        return alert("Fill please all fields")
    }
    console.log(trimmedData);
    
    localStorage.removeItem(storageKey);
formData = {email: "",message: "",}
form.reset();
});

