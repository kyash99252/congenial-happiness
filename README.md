# Traycer CLI

This project is a simplified implementation of the Traycer concept, built as a command-line interface (CLI) tool. It acts as a "planning layer" for software development by taking a high-level, natural language request and breaking it down into a structured development plan using the Google Gemini API.

## Tech Stack

- **Language:** TypeScript
- **Runtime:** Node.js
- **Core Libraries:**
    - [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai): To connect with the Gemini API for plan generation.
    - [commander](https://www.npmjs.com/package/commander): For building the command-line interface.
    - [chalk](https://www.npmjs.com/package/chalk): To add color and style to the console output.
    - [dotenv](https://www.npmjs.com/package/dotenv): To manage environment variables (like API keys).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kyash99252/congenial-happiness.git
    cd congenial-happiness
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up your environment:**
    Create a `.env` file in the root of the project and add your Google Gemini API key:
    ```
    GEMINI_API_KEY=your_api_key_here
    ```

## Usage

Once installed, you can run the CLI directly.

1.  **Build the project:**
    ```bash
    npm run build
    # or
    yarn build
    ```

2.  **Run the CLI:**
    The tool takes a single argument: a string describing the software development task you want to plan.

    ```bash
    # General usage
    node dist/cli.js "Create a REST API for a simple blog with endpoints for posts and comments."

    # Or using yarn
    yarn start "Create a REST API for a simple blog with endpoints for posts and comments."

    # Or using the registered bin
    traycer-cli "Create a REST API for a simple blog with endpoints for posts and comments."
    ```

### JSON Output

For machine-readable output, use the `--json` flag.

```bash
traycer-cli "Build a weather app that shows the current temperature." --json
```

## Build

To transpile the TypeScript code to JavaScript, run the build command. The output will be placed in the `dist/` directory.

```bash
npm run build
# or
yarn build
```

## Testing

Currently, there are no automated tests configured for this project.

To add testing, you could integrate a framework like [Jest](https://jestjs.io/) or [Vitest](https://vitest.dev/):

1.  **Install dev dependencies:**
    ```bash
    npm install -D jest @types/jest ts-jest
    ```
2.  **Configure Jest:**
    Create a `jest.config.js` file.
3.  **Add a test script to `package.json`:**
    ```json
    "scripts": {
      "test": "jest"
    }
    ```
4.  **Create test files** (e.g., `src/planner.test.ts`).