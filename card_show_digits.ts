function hideNumbers(inputCard: string) {
    return "**** **** **** " + inputCard.slice(-4)
}

console.log(hideNumbers("1234 1234 1234 5678"))
console.log(hideNumbers("1234123412349999"))
