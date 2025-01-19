// Hide/mask email addresses

function maskEmail(email: string): string {
    let maskedEmail = email.slice(0,3) + "***" + email.slice(email.indexOf("@"))
    return maskedEmail
}

console.log(maskEmail("apple1@example.com"));
console.log(maskEmail("oleski@oleski-code.com"));
console.log(maskEmail("test@test.com"));
