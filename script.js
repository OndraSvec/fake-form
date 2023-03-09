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

inputs.forEach(input => input.addEventListener('focusin', handleFocusIn));

inputs.forEach(input => input.addEventListener('focusout', handleFocusOut));

function handleUserInput(e) {
    switch (e.target.id) {
        case 'fname':
            if ((e.target.value !== "" || e.target.value !== null) && e.target.checkValidity() === true) {
               fname_LCN.classList.add('active');
            }
        break;
        case 'lname':
            if ((e.target.value !== "" || e.target.value !== null) && e.target.checkValidity() === true) {
               lname_LCN.classList.add('active');
            }
        break;
        case 'phone':
            if ((e.target.value !== "" || e.target.value !== null) && e.target.checkValidity() === true) {
               phone_LCN.classList.add('active');
            }
        break;
        case 'email':
            if ((e.target.value !== "" || e.target.value !== null) && e.target.checkValidity() === true) {
               email_LCN.classList.add('active');
            } else if ((e.target.value !== "" || e.target.value !== null) && e.target.checkValidity() === false) {
                email_LCN.classList.remove('active');
                email_LCN.classList.add('active-invalid');
            }
        break;
        case 'psw':
            if ((e.target.value !== "" || e.target.value !== null) && e.target.checkValidity() === true) {
               psw_LCN.classList.add('active');
            } else if ((e.target.value !== "" || e.target.value !== null) && e.target.checkValidity() === false) {
                psw_LCN.classList.remove('active');
                psw_LCN.classList.add('active-invalid');
            }
        break;
        case 'confirm_psw':
            if ((e.target.value !== "" || e.target.value !== null) && e.target.checkValidity() === true) {
               confirm_psw_LCN.classList.add('active');
            } else if ((e.target.value !== "" || e.target.value !== null) && e.target.checkValidity() === false) {
                confirm_psw_LCN.classList.remove('active');
                confirm_psw_LCN.classList.add('active-invalid');
            }
        break;
        default:
            return;
    }
}

function handleFocusIn(e) {
    switch (e.target.id) {
        case 'fname':
                fname_LCN.classList.add('active');
        break;
        case 'lname':
                lname_LCN.classList.add('active');
        break;
        case 'phone':
                phone_LCN.classList.add('active');
        break;
        case 'email':
                email_LCN.classList.add('active');
                email_LCN.setAttribute('style', 'color: var(--input-purple);')
        break;
        case 'psw':
                psw_LCN.classList.add('active');
                psw_LCN.setAttribute('style', 'color: var(--input-purple);')
        break;
        case 'confirm_psw':
                confirm_psw_LCN.classList.add('active');
                confirm_psw_LCN.setAttribute('style', 'color: var(--input-purple);')
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
            if ((e.target.value === '' || e.target.value === null) && e.target.checkValidity() === false) {
            email_LCN.classList.remove('active-invalid', 'active');
            email_LCN.setAttribute('style', 'color: red;');
            } else if (e.target.value !== "" || e.target.value !== null) {
                if (e.target.checkValidity() === true) {
                email_LCN.setAttribute('style', 'color: var(--input-purple);');
                } else if (e.target.checkValidity() === false) {
                email_LCN.setAttribute('style', 'color: red;');
                }
            }
        break;
        case 'psw':
            if ((e.target.value === '' || e.target.value === null) && e.target.checkValidity() === false) {
            psw_LCN.classList.remove('active-invalid', 'active');
            psw_LCN.setAttribute('style', 'color: red;');
            } else if (e.target.value !== "" || e.target.value !== null) {
                if (e.target.checkValidity() === true) {
                psw_LCN.setAttribute('style', 'color: var(--input-purple);');
                } else if (e.target.checkValidity() === false) {
                psw_LCN.setAttribute('style', 'color: red;');
                }
            }
        break;
        case 'confirm_psw':
            if ((e.target.value === '' || e.target.value === null) && e.target.checkValidity() === false) {
            confirm_psw_LCN.classList.remove('active-invalid', 'active');
            confirm_psw_LCN.setAttribute('style', 'color: red;');
            } else if (e.target.value !== "" || e.target.value !== null) {
                if (e.target.checkValidity() === false) {
                    confirm_psw_LCN.setAttribute('style', 'color: red;');
                } else if (e.target.value !== psw.value) {
                        confirm_psw_LCN.setAttribute('style', 'color: red;');
                } else if (e.target.checkValidity() === true) {
                    confirm_psw_LCN.setAttribute('style', 'color: var(--input-purple);');
                }
            }
        break;
        default:
            return;
    }
}