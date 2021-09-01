import Tags from "../Components/Corpo/Tags";
import ListaProdutos from "../Components/Corpo/ListaProdutos";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  height: 100%;
  background-color: #EEEEEE;
  padding-bottom: 2em;
`;


const PageListaProdutos = () => {
    return (
        <Main>
            <Tags />
            <ListaProdutos />
        </Main>
    );
}

export default PageListaProdutos;
