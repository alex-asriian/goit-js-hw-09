let formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".feedback-form");
const storageKey = "feedback-form-state";
const data = localStorage.getItem(storageKey);
if (data) {
    const savedData = JSON.parse(data);
    formData = savedData;
    form.elements.email.value = savedData.email;
form.elements.message.value = savedData.message;
}
form.addEventListener("input", (event) => {
    const name = event.target.name;
    const value = event.target.value;
    formData[name] = value;
    localStorage.setItem(storageKey, JSON.stringify(formData));
});

  


form.addEventListener("submit", (event) => {
    event.preventDefault();
   
    if (formData.email.trim() === "" || formData.message.trim() === "") {
        return alert("Fill please all fields")
    }
   console.log(formData);
   
    
    localStorage.removeItem(storageKey);
formData = {email: "",message: "",}
form.reset();
});

