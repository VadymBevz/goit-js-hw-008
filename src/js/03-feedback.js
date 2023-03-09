import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
// const emailInput = document.querySelector('input[name="email"]');
// const messageInput = document.querySelector('textarea[name="message"]');

const{email,message} = form.elements;
const KEY = "feedback-form-state";
function page(){
const savedDate = localStorage.getItem(KEY);
if(!savedDate) return;
try {
   const putData = JSON.parse(savedDate) ;
   email.value = putData.value;
   message.value = putData.value;
} catch (error) {
    console.log(`${error.name}`);
}
}
page();

const onInputForm = () => {
    const newFormData = {email: email.value, message: message.value};
    try {
     localStorage.setItem(KEY, JSON.stringify(newFormData))   
    } catch (error) {
        console.log(`${error.name}`)
    }
}
form.addEventListener('input' , throttle(onInputForm, 500));

const onSubmit = event => {
    event.preventDefault();
try {
    const savedForm = JSON.parse(localStorage.getItem(KEY));
    console.log(savedForm)
    localStorage.removeItem(KEY);
    form.reset()
} catch (error) {
    console.log(`${error.name}`)
}
}
form.addEventListener('submit' , onSubmit)
// const saveStateToLocalStorage = throttle(() => {
//   const state = {
//     email: emailInput.value,
//     message: messageInput.value
//   };
//   localStorage.setItem('feedback-form-state', JSON.stringify(state));
// }, 500);

// const setStateFromLocalStorage = () => {
//   const state = localStorage.getItem('feedback-form-state');
//   if (state) {
//     const { email, message } = JSON.parse(state);
//     emailInput.value = email;
//     messageInput.value = message;
//   }
// };

// form.addEventListener('input', saveStateToLocalStorage);
// window.addEventListener('load', setStateFromLocalStorage);
// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const state = {
//     email: emailInput.value,
//     message: messageInput.value
//   };
//   localStorage.removeItem('feedback-form-state');
//   emailInput.value = '';
//   messageInput.value = '';
//   console.log(state);
// });