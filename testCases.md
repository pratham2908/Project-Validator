## TESTCASES

**Testcase 1:**

```js
const htmlReq = [
  {
    id: "welcome-section",
    class: "",
    tag: "",
    reqNo: 1, // There should be a an element with id "welcome-section"
    nested: [
      {
        tag: "h1",
        class: "",
        id: "",
        reqNo: 2, // Welcome section should have an h1 tag
      },
    ],
  },
  {
    id: "projects",
    class: "",
    tag: "",
    reqNo: 3, // There should be an element with id "projects"
    nested: [
      {
        class: "project-title", // Projects should have an el with class "project-title"
        reqNo: 4,
      },
      {
        tag: "a", // Projects should have an link element
        reqNo: 5,
      },
    ],
  },
  {
    tag: "nav",
    id: "navbar",
    reqNo: 6, // There should be a nav element with id "navbar"

    nested: [
      {
        tag: "a",
        reqNo: 7, // navbar must have an anchor tag
      },
    ],
  },
  {
    tag: "a",
    id: "profile-link", // There should be an anchor tag with id "profile-link"
    reqNo: 8,
  },
];

const cssReq = [
  {
    id: "welcome-section",
    tag: "",
    class: "",
    reqNo: 9, // welcome section must have height equal to viewport
    properties: [
      {
        height: "100vh",
      },
    ],
  },
  {
    id: "navbar",
    tag: "nav",
    class: "",
    reqNo: 10, // navbar must always stay at the top of viewport
    properties: [
      {
        position: "fixed",
      },
      {
        top: "0px",
      },
    ],
  },
];

const startId = 1;
const endId = 10;
```

**Expected Output:**

```bash
Requirement completed 1
Requirement completed 2
Requirement completed 3
Requirement Not completed 4
Requirement Not completed 5
Requirement completed 6
Requirement completed 7
Requirement completed 8
Requirement completed 9
Requirement Not completed 10
```

**Testcase 2:**

```js
const htmlReq = [
  {
    id: "page-header",
    tag: "header",
    reqNo: 1,
  },
  {
    id: "achievements",
    reqNo: 2,
    nested: [],
  },
  {
    id: "projects",
    reqNo: 3,
    nested: [
      {
        tag: "ul",
        reqNo: 4,
      },
    ],
  },
];

const cssReq = [
  {
    id: "page-header",
    reqNo: 5,
    properties: [
      {
        fontSize: "24px",
      },
    ],
  },
  {
    id: "projects",
    reqNo: 6,
    properties: [{ color: "blue" }],
  },
];

const startId = 1;
const endId = 6;
```

**Expected Output:**

```bash
Requirement completed 1
Requirement Not completed 2
Requirement completed 3
Requirement completed 4
Requirement Not completed 5
Requirement Not completed 6
```

**Testcase 3:**

```js
const htmlReq = [
  {
    tag: "table",
    reqNo: 1,
    nested: [],
  },
  {
    tag: "strong",
    id: "bold-element",
    reqNo: 2,
    nested: [],
  },
  {
    tag: "projects",
    reqNo: 3,
    nested: [
      {
        tag: "img",
        reqNo: 4,
        nested: [],
      },
    ],
  },
];

const cssReq = [
  {
    id: "projects",
    reqNo: 5,
    properties: [
      {
        display: "flex",
      },
    ],
  },
  {
    id: "welcome-section",
    reqNo: 6,
    properties: [{ boxSizing: "border-box" }],
  },
];

const startId = 1;
const endId = 6;
```

**Expected Output:**

```bash
Requirement completed 1
Requirement Not completed 2
Requirement completed 3
Requirement completed 4
Requirement completed 5
Requirement completed 6
```
