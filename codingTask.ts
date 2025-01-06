/* 
You are given an array of objects representing test cases. 
Each test case has a unique ID, a description, and a status. 
Your task is to write a TypeScript function that processes this array to generate a summary object. 
The summary should count the number of test cases for each status and group all test descriptions by their status.
Input Example: 
*/

const testCases = [
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
}   */

function testsSummary(testCases) {  

    const output : {
        passed: {
            count: number,
            descriptions: string []
        }
        failed: {
            count: number,
            descriptions: string []
        }
        skipped: {
            count: number,
            descriptions: string []
        }
    } = {
        passed: {
            count: 0,
            descriptions: []
        },
        failed: {
            count: 0,
            descriptions: []
        },
        skipped: {
            count: 0,
            descriptions: []
        }
    } 

    testCases.forEach(testCase => {
        // console.log(`ID: ${testCase.id}, Description: ${testCase.description}, Status: ${testCase.status}`);
        if (testCase.status === "passed") {
            output.passed.count++
            output.passed.descriptions.push(testCase.description)
        }
        if (testCase.status === "failed") {
            output.failed.count++
            output.failed.descriptions.push(testCase.description)
        }
        if (testCase.status === "skipped") {
            output.skipped.count++
            output.skipped.descriptions.push(testCase.description)
        }
    });

    return output;
}

console.log(testsSummary(testCases))
