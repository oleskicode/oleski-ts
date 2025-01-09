// create function to hide all but last 4 numbers (banking card)
// example : 1234 1234 1234 5678 >> **** **** **** 5678

const card1: string = "1234 1234 1234 5678"
const card2: string = "3456345634567890"

function maskBankCard(inputCard: string) : string {
    const maskedCard = "**** **** **** " + inputCard.slice(-4)
    return maskedCard
}

console.log(maskBankCard(card1))
console.log(maskBankCard(card2))
