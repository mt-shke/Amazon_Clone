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
