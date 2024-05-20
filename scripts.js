const passwordInputs = document.querySelectorAll('.password-input');
const pwError = document.getElementById('password-error');

passwordInputs.forEach(ipt => {
    ipt.addEventListener('blur', () => {
        const pw = document.getElementById('password');
        const pwConfirm = document.getElementById('confirm-password');

        if (!pw.value || !pwConfirm.value || (pw.value === pwConfirm.value)) {
            pw.classList.remove('password-invalid');
            pwConfirm.classList.remove('password-invalid');
            pwError.style.display = 'none';
        } else {
            pw.classList.add('password-invalid');
            pwConfirm.classList.add('password-invalid');
            pwError.style.display = 'block';
        }
    })
})