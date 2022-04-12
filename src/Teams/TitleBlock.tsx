import styled from 'styled-components';
interface TitleBlockProps {
  content: {
    title: string;
    subtitle: string;
    image: {
      picture: any;
      alt: string;
    };
    buttons: {
      content: string;
      link: string;
    }[];
  };
}

const TitleBlock = (props: TitleBlockProps) => (
  <StyledTitleBlock>
    <StyledLeftBlock>
      <h1>{props.content.title}</h1>
      <p>{props.content.subtitle}</p>
      <StyledButtonList>
        {props.content.buttons.map((b) => (
          <a key={`t-${b.content}`} href={b.link}>
            <StyledButton>{b.content}</StyledButton>
          </a>
        ))}
      </StyledButtonList>
    </StyledLeftBlock>
    <StyledTitleImage
      src={props.content.image.picture}
      alt={props.content.image.alt}
    />
  </StyledTitleBlock>
);

const StyledTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 90px 0 90px;
`;

const StyledLeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledButtonList = styled.div`
  display: flex;
  gap: 30px;
  margin: 20px 0 20px 0;
`;

const StyledButton = styled.button`
  border: 2px solid ${(props) => props.theme.colors.primaryBlue};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.primaryBlue};
  background-color: ${(props) => props.theme.colors.cloudBlue};
  font-family: ${(props) => props.theme.fonts.heading};
  padding: 10px 50px 10px 50px;
  cursor: pointer;
  font-weight: bold;

  :hover {
    color: ${(props) => props.theme.colors.offWhite};
    background-color: ${(props) => props.theme.colors.primaryBlue};
  }

  :active {
    color: ${(props) => props.theme.colors.skyBlue};
  }
`;

const StyledTitleImage = styled.img`
  width: 500px;
  justify-content: center;
`;

export default TitleBlock;
