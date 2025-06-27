// check if input string is valid email

function emailValidator(email: string): boolean {
  let acceptableChars = "@._-abcdefghijklmnopqrstuvwxyz0123456789";

  email = email.toLowerCase();
  console.log("\nInput: " + email);

  const errorString1 = "1. There must be @ in email ";
  if (email.includes("@") === false) {
    console.log(`${email} - ${errorString1}`);
    return false;
  }

  const errorString2 = "2. Symbol @ must not be first or within last 3 symbols";
  if (email.slice(0, 1).includes("@") || email.slice(-3).includes("@")) {
    console.log(`${email} - ${errorString2}`);
    return false;
  }

  const errorString3 = "3. Substring after @ must contain at least 1 dot";
  if (email.slice(email.indexOf("@")).includes(".") === false) {
    console.log(`${email} - ${errorString3}`);
    return false;
  }

  const errorString4 = "4. Must contain only one @";
  // console.log(email.slice(email.indexOf("@")+1))
  if (email.slice(email.indexOf("@") + 1).includes("@")) {
    console.log(`${email} - ${errorString4}`);
    return false;
  }

  const errorString5 = "5. Must contain only acceptable chars";
  for (let char of email) {
    if (acceptableChars.includes(char) === false) {
      console.log(`${email} - ${errorString5}`);
      console.log(`_${char}_ is not acceptable symbol`);
      return false;
    }
  }

  const errorString6 = "6. Must not start or end with dot";
  if ((email[0] === ".") === true || (email.slice(-1) === ".") === true) {
    console.log(`${email} - ${errorString6}`);
    return false;
  }

  const errorString7 = "7. Dot must not be positioned right after @";
  if (email.includes("@.")) {
    console.log(`${email} - ${errorString7}`);
    return false;
  }

  const errorString8 = "8. Too short or too long email";
  if (email.length < 6 || email.length > 36) {
    console.log(`${email} - ${errorString8}`);
    return false;
  }

  const errorString9 = "9. Consecutive dots are not allowed";
  if (email.includes("..")) {
    console.log(`${email} - ${errorString9}`);
    return false;
  }

  const errorString10 = "10. Domain name is too short";
  if (email.slice(-2).includes(".")) {
    console.log(`${email} - ${errorString10}`);
    return false;
  }

  console.log("Email is valid");
  return true;
}

const emailsArray: string[] = [
  //valid
  "test.email@domain.com",
  "my_email@domain.co.in",
  "user-name@domain.com",

  // invalid:
  "someemail.com", // 1. there is @
  "d@d", // 2. @ position incorrect
  "test@domain", // 3. (missing dot in domain)
  "test@@domain.com", // 4. (multiple @)
  "test@doma@in.com", // 4. (multiple @)
  "some-Яabd@ukr.net", // 5.
  ".test@domain.com", // 6. (starts with dot)
  "test@domain.com.", // 6. (ends with dot)
  "test@.com", // 7.(dot immediately after @)
  "tekkkkkfgdgdfgdfgfdgsfsdfkst@domain.commmmmmmmmmmmmmmmm", // 8. (too long
  "a@b.c", // 8. too short
  "test@domain..com", // 9.(consecutive dots)
  "test@domain.c", // 10. (domain name too short)
];

emailsArray.forEach((email) => emailValidator(email));
