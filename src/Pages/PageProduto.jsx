import Tags from "../Components/Corpo/Tags";
import Produto from "../Components/Corpo/Produto";
import styled from "styled-components";

const Main= styled.main`
  height: 100%;
  width: 100%;
  background-color: #EEEEEE;
  padding-bottom: 2em;
`;


const PageProduto = () => {
    return(
        <Main>
            <Tags />
            <Produto />
        </Main>
    );
}

export default PageProduto;