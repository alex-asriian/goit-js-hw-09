let formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".feedback-form");
form.addEventListener("input", (event) => {
    const name = event.target.name;
    const value = event.target.value.trim()     ;
    formData[name] = value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

  
const data = localStorage.getItem("feedback-form-state");
if (data) {
    const savedData = JSON.parse(data);
    formData = savedData;
    form.elements.email.value = savedData.email;
form.elements.message.value = savedData.message;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formData.email.trim() === "" || formData.message.trim() === "") {
        return alert("Fill please all fields")
    }
    console.log(formData);
    
    localStorage.removeItem("feedback-form-state");
formData = {email: "",message: "",}
form.reset();
});

