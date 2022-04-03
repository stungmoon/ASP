const signupForm = document.getElementById("signup")

signupForm.addEventListener('submit', e => {
    e.preventDefault()
    let userEmail = document.getElementById("email-field").value
    console.log(`${userEmail} has just signed up`)
    document.getElementById("main-section").innerHTML = `
        <h1>Thank you for signing up to our mailing list.</h1>
        <p class="content-text">You will now receive updates about this event directly to your inbox.</p>
        <p class="content-text">For more information, please get in touch with us on social media with the icons below.</p>
    `
})