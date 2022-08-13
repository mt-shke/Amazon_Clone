<details>
<summary>Setup</summary>

```js
// npm install react-router-dom@6
// npm install react-icons --save
// Testing commit
```

Form

```js
// npm install react-hook-form
// npm i yup
// npm i @hookform/resolvers
```

</details>

<details>
<summary>Hidding source code</summary>

```js
// https://www.capscode.in/blog/how-to-hide-reactjs-code-from-browser
```

.env

```js
// add .env file at the root of the project white this line, before npm run build
// GENERATE_SOURCEMAP = false;
```

<!-- or  -->

package.json

```js
"build": "set \"GENERATE_SOURCEMAP=false\" && react-scripts build"
//The && DOES NOT work in the PowerShell but WORKS in cmd, so make sure in which CLI you are writing npm run build
```

</details>

<details>
<summary>Firebase</summary>

```js
// npm install firebase
```

</details>

<details>
<summary>React hook form</summary>

using test

```js
// name: string()
// .trim()
// .required("Saisissez votre nom")
// .test(
//     "contains-firstname-and-lastname",
//     ((value) => space.includes(value.trim())) &&
//         "Please enter your firstname and lastname",
//     (value) => value.length > 2
// ),
```

</details>

<details>
<summary>ContextProvider with Js</summary>

```js

```

</details>

<details>
<summary>Vite Config - chunkSizeWarningLimit</summary>

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        chunkSizeWarningLimit: 1600,
    },
});
```

</details>

<details>
<summary>Import icon 3 ways</summary>

```js
// Using react icon  => good, resize ok, fill bad
   <AiFillCheckCircle size={32} color="green" />

// Using directly as svg => resize by using height/width, need more pratice positionning, color ok
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48"
                    className="fill-white bg-green-600 rounded-full aspect-square"
                >
                    <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
                </svg>

// import as svg src => averrage
                <svg
                    src="../src/assets/svg/checkIcon.svg"
                    className="w-6 aspect-square fill-white bg-green-600 rounded-full"
                />
```

</details>

<details>
<summary>todo</summary>

```js
// set user data to firestore maybe after emailVerified
// set crud user logic
// add product crud

// HeaderLoginAccountModal
```

</details>
