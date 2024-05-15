import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {


  &, &.light-mode {

  
  /* Grey */
  --color-grey-0: #fff;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-900: #111827;
  --color-black: #000000;

  --color-orange-400: #fb923c;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);


    
 
}

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;


  // hamburger
  --bar-width: 18px;
  --bar-height: 1px;
  --hamburger-gap: 5px;
  --animation-and-timing: 300ms ease;
  --hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2)

  --image-grayscale: 0;
  --image-opacity: 100%;
  --header-height: 5.5rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  /* font-size: 16px; */
}

body {
  font-family: 'FuturaLight', sans-serif;
  font-weight: 200;
  /* color: var(--color-grey-900); */
  transition: color 0.3s, background-color 0.3s;
  /* min-height: 100vh; */
  line-height: 1.5;
  /* font-size: 1.6rem; */
}

#root {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
  letter-spacing: .0625rem;
  
  
}

h1 {
  font-size: 2.25rem;
  letter-spacing: 2.5px;
}

h2 {
  font-size: 2rem;
  font-weight: 400; 
}

p {
  font-size: 1rem;
  letter-spacing: .0850rem;

}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
`;

export default GlobalStyles;
