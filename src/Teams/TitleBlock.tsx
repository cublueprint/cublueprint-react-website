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
  <>
    <h1>{props.content.title}</h1>
    <p>{props.content.subtitle}</p>
    <img src={props.content.image.picture} alt={props.content.image.alt}></img>
    {props.content.buttons.map((b) => (
      <a key={`t-${b.content}`} href={b.link}>
        <button>{b.content}</button>
      </a>
    ))}
  </>
);

export default TitleBlock;
