# HTML & CSS Requirements Validator

This project offers a JavaScript-based tool to streamline the validation of your HTML and CSS code against a set of predefined requirements.

**Key Features:**

- **Flexible & Customizable:** Define requirements using a structured JavaScript object, allowing for easy modification to match your specific needs.
- **Comprehensive Validation Types:** Check for element IDs, classes, tags of elements, nested structures, and more.
- **Provide FeedBack** The validator provides feedback on the requirements that are met and that are not.

**Installation:**

1. Clone this repository by running this command:

```bash
git clone https://github.com/pratham2908/Project-Validator.git
```

2. Load sample test cases from `testCases.md` file one by one in place of the following code in `index.js` file.

```js
const htmlReq = [];

const cssReq = [];

const startId = 0;
const endId = 0;
```

3. Run `index.js` file in the browser

4. In the console, you will get all the cases that passed and those who did not pass.

## How It Works

This validator takes a structured approach to ensure your HTML and CSS code adheres to a set of predefined requirements. Here's a breakdown of the process:

**1. Defining Requirements:**

- Requirements are specified using JavaScript objects stored in two arrays: `htmlReq` for HTML validation and `cssReq` for CSS validation.
- Each object represents a specific element you want to check, containing properties like:
  - `id`: To target elements with unique IDs.
  - `tag`: To identify elements by their tag names (e.g., `div`, `h1`).
  - `class`: To target elements with specific class names.
  - `reqId`: The requirement id of the current requirement.
  - **Nested Requirements:** An optional `nested` property allows defining requirements for nested elements within the current element. This works for both HTML and CSS requirements.
  - **Required Properties (CSS):** For CSS requirements, a `properties` array specifies the CSS properties an element must possess (e.g., `color`, `font-size`).

**2. Recursive Validation:**

- The `validate` function initiates the validation process. It takes two arguments:
  - The `Document` object, representing the starting point (entire HTML structure).
  - The current requirement array (`htmlReq` or `cssReq`).
- The function iterates through each requirement object in the array:
  - It searches the HTML structure for elements matching the specified ID, tag, or class.
  - For CSS requirements, it verifies that the matched elements have the required properties defined in the `properties` array.
  - If a requirement is met, it's marked as "done."
  - If a requirement has a `nested` property, a recursive call to the corresponding`validate`(html or css validate) function occurs:
    - The nested requirements and the matched element from the current level become the arguments for this recursive call.
    - This enables thorough validation of nested HTML structures.

**3. Validation Flow:**

- This recursive approach allows the validator to meticulously analyze elements, navigating through nested HTML structures as needed.
- It comprehensively verifies that the elements adhere to the defined requirements, ensuring your HTML and CSS code meets your specifications.

**4. Printing Results:**

- The `printResults` function logs the validation results to the console.

## Generate TestCases

**1. Create htmlReq and cssReq array of objects.**

- Each object defines a specific requirement for an HTML or CSS element.

**2. Each object should have the following properties:**

- `id`: To target elements with unique IDs. (optional)
- `tag`: To identify elements by their tag names (e.g., `div`, `h1`). (optional)
- `class`: To target elements with specific class names. (optional)
- `reqId`: The requirement id of the current requirement.
- **Nested Requirements:** An optional `nested` property allows defining requirements for nested elements within the current element. This works for both HTML and CSS requirements.
- **Required Properties (CSS):** For CSS requirements, a `properties` array specifies the CSS properties an element must possess (e.g., `color`, `font-size`).

**3. Structure of each nested requirement is the same as the htmlReq or cssReq array.**
