import { StyledContainer } from "./styles";
export interface ContainerProps {
    children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
