import {Container} from "./styles";


export const Main = ({children, changeWidth}) => {

    return (
        <Container changeWidth={changeWidth}>
            {children}
        </Container>
    );
}