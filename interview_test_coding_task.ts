/* You are given an array of objects representing test cases. 
Each test case has a unique ID, a description, and a status. 
Your task is to write a TypeScript function 
that processes this array to generate a summary object. 
The summary should count the number of test cases for each status and group all test descriptions by their status. Input Example: */
const testCases1: TestCase[] = [
  { id: 1, description: "Login with valid credentials", status: "passed" },
  { id: 2, description: "Login with invalid credentials", status: "failed" },
  { id: 3, description: "Forgot password flow", status: "skipped" },
  { id: 4, description: "Update profile", status: "passed" },
  { id: 5, description: "Delete account", status: "failed" },
];

/* Output Example:
{
    passed: {
        count: 2,
        descriptions: ["Login with valid credentials", "Update profile"]
    },
    failed: {
        count: 2,
        descriptions: ["Login with invalid credentials", "Delete account"]
    },
    skipped: {
        count: 1,
        descriptions: ["Forgot password flow"]
    }
}
*/

type TestCase = {
  id: number;
  description: string;
  status: "passed" | "failed" | "skipped";
};

function processTestCases(testCases: TestCase[]): object {
  let summary = {
    passed: {
      count: 0,
      descriptions: [],
    },
    failed: {
      count: 0,
      descriptions: [],
    },
    skipped: {
      count: 0,
      descriptions: [],
    },
  };
  //   console.log(testCases);
  testCases.forEach((testCase) => {
    if (testCase.status === "passed") {
      summary.passed.count++;
      summary.passed.descriptions.push(testCase.description);
    }
    if (testCase.status === "failed") {
      summary.failed.count++;
      summary.failed.descriptions.push(testCase.description);
    }
    if (testCase.status === "skipped") {
      summary.skipped.count++;
      summary.skipped.descriptions.push(testCase.description);
    }
  });
  return summary;
}

console.log(processTestCases(testCases1));
