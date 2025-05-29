# staffengineer-poc-02-react-typescript

# Hello World: TypeScript & Redux

## Overview

The `hello-world-ts-redux` project is a minimal React application demonstrating the integration of **TypeScript** for type safety and **Redux Toolkit** for state management. It features a simple counter interface to showcase Redux functionality, styled with Tailwind CSS, and built using Create React App with the TypeScript template. This project serves as a starting point for building modern, scalable React applications, providing a reference for projects like `staffengineer-poc-01-react`.

## Purpose

This project aims to provide a clean, fully typed React application with Redux Toolkit, illustrating best practices for type-safe development and state management. It can be used as a prototype for feature-rich applications requiring global state, such as authentication or API data handling, while maintaining a maintainable codebase.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript for enhanced reliability and developer productivity.
- **Redux Toolkit**: Simplifies state management with typed actions and reducers.
- **React-Redux**: Connects Redux to React components.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Create React App**: Project scaffolding with TypeScript support.
- **Node.js & npm**: Runtime and package manager for development.

## Setup Instructions

To set up and run the project locally, follow these steps:

1. **Create the Project**:
   Initialize a new React project with TypeScript:

   ```bash
   mkdir hello-world-ts-redux
   cd hello-world-ts-redux
   npx create-react-app . --template typescript
   ```

2. **Install Dependencies**:
   Install Redux Toolkit, React-Redux, and Tailwind CSS:

   ```bash
   npm install @reduxjs/toolkit react-redux @types/react-redux
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Configure Tailwind CSS**:
   Update `tailwind.config.js` to include TypeScript files:

   ```javascript
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ["./src/**/*.{ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

4. **Set Up Files**:
   Create or update the following files in the `src` directory:

   - `index.tsx`: Main entry point, wrapping the app with Redux.
   - `App.tsx`: Main component with a counter UI using Redux hooks.
   - `index.css`: Includes Tailwind CSS directives.
   - `App.css`: Optional for custom styles (can be empty).
   - `store/index.ts`: Configures the Redux store.
   - `store/slices/counterSlice.ts`: Defines a counter slice with increment, decrement, and add actions.
   - `types/hooks.ts`: Defines typed Redux hooks.
   - `declarations.d.ts`: Declares CSS module support.

5. **Run the Application**:
   Start the development server:

   ```bash
   npm start
   ```

   Open `http://localhost:3000` to view the app.

6. **Verify Functionality**:
   The app displays a "Hello, TypeScript & Redux!" heading, a counter, and buttons to increment, decrement, or add 5 to the counter. Use Redux DevTools (browser extension) to inspect state changes.

## Project Structure

The project follows a standard React structure with TypeScript and Redux:

```
hello-world-ts-redux/
├── node_modules/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   ├── index.css
│   ├── declarations.d.ts
│   ├── store/
│   │   ├── index.ts
│   │   └── slices/
│   │       └── counterSlice.ts
│   └── types/
│       └── hooks.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

- **public/**: Static assets, including the HTML entry point.
- **src/**: Source code.
  - `index.tsx`: Initializes the app with Redux Provider.
  - `App.tsx`: Renders the counter UI with Redux integration.
  - `index.css`: Includes Tailwind CSS directives.
  - `App.css`: Optional custom styles.
  - `store/`: Redux configuration.
    - `index.ts`: Configures the Redux store.
    - `slices/counterSlice.ts`: Manages counter state with typed actions.
  - `types/hooks.ts`: Defines typed Redux hooks for type safety.
  - `declarations.d.ts`: Supports CSS modules for future styling.
- **tsconfig.json**: Configures TypeScript with React and strict type checking.
- **tailwind.config.js**, **postcss.config.js**: Configures Tailwind CSS.
- **package.json**: Project metadata and scripts.

## Usage

- **Interact with the App**: Use the Increment, Decrement, and Add 5 buttons to update the counter, verifying Redux state management.
- **Extend the App**: Add new Redux slices (e.g., for authentication) in `src/store/slices/`. Update the store in `src/store/index.ts` to include new reducers. Define additional TypeScript types in `src/types/` as needed.
- **Type Safety**: TypeScript ensures props, state, and actions are correctly typed. For example, the counter slice enforces a numeric value for actions.
- **Debugging**: Use Redux DevTools to monitor state changes and the browser console to check for TypeScript errors.
- **Styling**: Tailwind CSS provides utility classes for styling. Add custom styles in `src/App.css` if needed.

## Extending the Project

To align with projects like `staffengineer-poc-01-react`, consider:

- Adding a Redux slice for authentication, defining a state with a boolean flag and user data (e.g., id, name).
- Creating additional components in `src/components/` for new features.
- Integrating API calls with typed responses in `src/utils/`.
- Adding tests with Jest and TypeScript support (`npm install --save-dev @types/jest`).

## Contributing

Contributions are welcome! Submit pull requests or open issues on the repository. Ensure new code follows TypeScript types and Redux Toolkit patterns.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
