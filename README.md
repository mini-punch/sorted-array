# Merge Sorted Arrays (TypeScript Project)

---

## 1. Prerequisites

If your machine does not have **Node.js** installed, follow these steps:

1. Visit the [nodejs.org](https://nodejs.org/) website.
2. Download and install the **LTS** version (recommended).
3. Verify the installation by opening your Terminal and typing:

```bash
node -v
npm -v
```

> A version number must appear in the output.

---

## 2. Library Installation

Once Node.js is installed, open the Terminal in this project folder and run the following command to install the necessary tools:

```bash
npm install --save-dev typescript jest ts-jest @types/jest @types/node
```

---

## 3. Configuration

To ensure TypeScript and Jest work together without errors in your editor:

```bash
npx tsc --init
```

Modify the configuration values to match the settings below:

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "CommonJS",
    "strict": true,
    "types": ["jest", "node"],
    "skipLibCheck": true,
    "noUncheckedIndexedAccess": true
  }
}
```

Create the `jest.config.js` file using this command:

```bash
npx ts-jest config:init
```

---

## 4. Running Unit Tests

Once you have finished writing your code, use this command to verify its correctness:

```bash
npx jest
```

---

## Project Structure

```plaintext
ts-merge-project/
├── node_modules/
├── src/
│   └── merge.ts         # Main file containing the merge function
├── test/
│   └── merge.test.ts    # File for writing Unit Tests
├── jest.config.js
├── package.json
├── tsconfig.json
└── README.md
```
