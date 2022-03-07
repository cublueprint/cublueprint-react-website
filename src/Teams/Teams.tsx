import styled from 'styled-components';
import TitleBlock from './TitleBlock'; 

//import content from './teams-content.ts';

const teams = [
    {"Execs": [
        {
            name: "Name",
            linkedin: "linkedin",
            picture: "picture of you"
        }, {
            name: "Name",
            linkedin: "linkedin",
            picture: "picture of you"
        }, {
            name: "Name",
            linkedin: "linkedin",
            picture: "picture of you"
        }
    ]},{
    "Urban Minds": [

    ]},{
    "Beneficient": [

    ]},{
    "Website Team": [
    
    ]}
];


const teams_content = {
    TitleBlock: {
        title: "Meet the Team!",
        subtitle: "Take a glimpse at the individuals who have made the team what it is today.",
        image: {
            picture: "ADD THIS IN LATER LEL",
            alt: "alt"
        },
        buttons: [
            {
                content: "JOIN US",
                link: "ADD THIS IN LATER LEL"
            }
        ]
    }, 
    TeamsList: teams
};//

interface TeamsProps {
  links: string[];
}

const Teams = ({ links }: TeamsProps) => (
    <>
        <TitleBlock content={teams_content.TitleBlock}></TitleBlock>
        <h1>Hello this is the teams page !  </h1>
    </>
   
); 

export default Teams;
