
# React + Vite Setup
```
    npm create vite@latest
```
```
    "dependencies": {
    "@ant-design/icons": "^4.8.0",
    "@mui/icons-material": "^5.14.16",
    "@mui/material": "^5.14.17",
    "@mui/styled-engine-sc": "^6.0.0-alpha.5",
    "@mui/x-data-grid": "^6.18.1",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "antd": "^5.1.2",
    "axios": "^1.5.0",
    "bootstrap": "^5.3.1",
    "jspdf": "^2.5.1",
    "keep-react": "^1.0.1",
    "moment": "^2.29.4",
    "react": "^18.2.0",
    "react-circular-progressbar": "^2.1.0",
    "react-datepicker": "^4.18.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.15.0",
    "react-scripts": "5.0.1",
    "react-to-pdf": "^1.0.1",
    "react-to-print": "^2.14.15",
    "styled-components": "^6.1.1"
  },
```
```
    npm install
```
```
    npm run dev
```



## Tailwind CSS Setup ( [Resource Link](https://tailwindcss.com/docs/guides/vite#react) )
  

```
    npm install -D tailwindcss postcss autoprefixer
```
```
    npx tailwindcss init -p
```


  

##### Paste it in tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```


##### Paste it into Root Css


```
@tailwind base;
@tailwind components;
@tailwind utilities;
```