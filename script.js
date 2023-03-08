const inputs = document.querySelectorAll('input');

const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const psw = document.querySelector('#psw');
const confirm_psw = document.querySelector('#confirm_psw');

const fname_LCN = document.querySelector('#fname-LCN');
const lname_LCN = document.querySelector('#lname-LCN');
const phone_LCN = document.querySelector('#phone-LCN');
const email_LCN = document.querySelector('#email-LCN');
const psw_LCN = document.querySelector('#psw-LCN');
const confirm_psw_LCN = document.querySelector('#confirm_psw-LCN');

inputs.forEach(input => input.addEventListener('input', handleUserInput));

inputs.forEach(input => input.addEventListener('focusout', handleFocusOut));

function handleUserInput(e) {
    switch (e.target.id) {
        case 'fname':
            if (e.target.value !== "" && e.target.checkValidity() === true) {
               fname_LCN.classList.add('active');
            }
        break;
        case 'lname':
            if (e.target.value !== "" && e.target.checkValidity() === true) {
               lname_LCN.classList.add('active');
            }
        break;
        case 'phone':
            if (e.target.value !== "" && e.target.checkValidity() === true) {
               phone_LCN.classList.add('active');
            }
        break;
        case 'email':
            if (e.target.value !== "" && e.target.checkValidity() === true) {
               email_LCN.classList.add('active');
            } else if (e.target.value !== "" && e.target.checkValidity() === false) {
                email_LCN.classList.add('active-invalid');
            }
        break;
        case 'psw':
            if (e.target.value !== "" && e.target.checkValidity() === true) {
               psw_LCN.classList.add('active');
            } else if (e.target.value !== "" && e.target.checkValidity() === false) {
                psw_LCN.classList.add('active-invalid');
            }
        break;
        case 'confirm_psw':
            if (e.target.value !== "" && e.target.checkValidity() === true) {
               confirm_psw_LCN.classList.add('active');
            } else if (e.target.value !== "" && e.target.checkValidity() === false) {
                confirm_psw_LCN.classList.add('active-invalid');
            }
        break;
        default:
            return;
    }
}

function handleFocusOut(e) {
    switch (e.target.id) {
        case 'fname':
            if ((e.target.value === '' || e.target.value === null) && e.target.checkValidity() === true) {
                fname_LCN.classList.remove('active');
            }
        break;
        case 'lname':
            if ((e.target.value === '' || e.target.value === null) && e.target.checkValidity() === true) {
                lname_LCN.classList.remove('active');
            }
        break;
        case 'phone':
            if ((e.target.value === '' || e.target.value === null) && e.target.checkValidity() === true) {
                phone_LCN.classList.remove('active');
            }
        break;
        case 'email':
            if ((e.target.value !== "" || e.target.value === null) && e.target.checkValidity() === true) {
                email_LCN.setAttribute('style', 'color: var(--input-purple);');
            } else if (e.target.value === '' || e.target.value === null) {
                email_LCN.classList.remove('active-invalid');
            }
        break;
        case 'psw':
            if ((e.target.value !== "" || e.target.value === null) && e.target.checkValidity() === true) {
                psw_LCN.setAttribute('style', 'color: var(--input-purple);');
            } else if (e.target.value === '' || e.target.value === null) {
                psw_LCN.classList.remove('active-invalid');
            }
        break;
        case 'confirm_psw':
            if ((e.target.value !== "" || e.target.value === null) && e.target.checkValidity() === true) {
                confirm_psw_LCN.setAttribute('style', 'color: var(--input-purple);');
            } else if (e.target.value === '' || e.target.value === null) {
                confirm_psw_LCN.classList.remove('active-invalid');
            }
        break;
        default:
            return;
    }
}