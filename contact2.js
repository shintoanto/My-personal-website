function validatingFirstName() {
    var nameInput = $('#name').val()
    var validationLetter = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/
    if (nameInput == "") {
        $('#nameError').html('Please enter your name')
        nameONe = false
    } else if (nameInput == " ") {
        $('#nameError').html("Do not enter space as first character")
        nameOne = false
    } else if (nameInput > 15) {
        $('#nameError').html("Please enter your valid name")
        nameOne = false
    } else if (nameInput.match(validationLetter)) {
        $('#nameError').html("This is not supperted")
        name1 = false
    }
}

function validatingMail() {
    var emailInput = $('#emailId').val()

    if (emailInput == "") {
        $('#emailError').html('Please enter email')

    } else if (emailInput == "  ") {
        $('#emailError').html("Please enter your email")

    } else if (emailInput > 15) {
        $('#emailError').html("Please enter your email")

    }
}

function validatingSubject() {
    var subjectInput = $('#subject').val()

    if (subjectInput == "") {
        $('#subjectError').html('Please enter subject')

    } else if (subjectInput == "  ") {
        $('#subjectError').html("Please enter your subject not blank")

    } else if (subjectInput > 15) {
        $('#subjectError').html("Please enter your subject less than 30 words")

    }
}

function validatingMessage() {
    var messageInput = $('#messaege').val()

    if (messageInput == "") {
        $('#messageError').html('Please enter message')

    } else if (messageInput == "  ") {
        $('#messageError').html("Not blank message")

    } else if (messageInput > 30) {
        $('#messageError').html("Please enter your message in 30 words")

    }
}