import TitleBlock from './TitleBlock';
import ContentBlock from './ContentBlock';

import content from './teams-content';

interface TeamsProps {
  links: string[];
}

const Teams = (props: TeamsProps) => (
  <>
    <TitleBlock content={content.TitleBlock}></TitleBlock>
    {content.TeamsList.map((team, index) => (
      <ContentBlock key={`t-${team.name}`} title={team.name}>
        <Team content={team}/> 
      </ContentBlock>
    ))}
  </>
);

interface TeamProps {
  content: {
    name: string;
    members: {
      name: string;
      linkedin: string;
      picture: string;
    }[];
  };
}

const Team = ({ content }: TeamProps) => <div>{content.name}</div>;

export default Teams;
