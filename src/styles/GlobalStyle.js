import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
	box-sizing:border-box;
}
body {
    background-color: #333333;
}
a {
    text-decoration: none;
}
input:-webkit-autofill {
    -webkit-box-shadow:0 0 0 50px #f1e7c5 inset; /* aqui muda sua cor do fundo */
    -webkit-text-fill-color: #000000; /* Cor do texto */
}
`;
export default GlobalStyle;
