import { Card, Image, Segment } from "semantic-ui-react";

export default function SkillsPanel() {

    return <Segment raised>
        <h1 className="header">Skills</h1>
        <Card.Group itemsPerRow={ 6 }>
            <Card>
                <Card.Content textAlign="center"><Image size="tiny" src="HTMLTagLogo.png" /></Card.Content>
                <Card.Content textAlign="center"><Card.Header>HTML</Card.Header></Card.Content>
            </Card>
            <Card>
                <Card.Content textAlign="center"><Image size="tiny" src="CSSTagLogo.jpg" /></Card.Content>
                <Card.Content textAlign="center"><Card.Header>CSS</Card.Header></Card.Content>
            </Card>
            <Card>
                <Card.Content textAlign="center"><Image size="tiny" src="JavaScriptLogo.png" /></Card.Content>
                <Card.Content textAlign="center"><Card.Header>JavaScript</Card.Header></Card.Content>
            </Card>
            <Card>
                <Card.Content textAlign="center"><Image size="tiny" src="ReactLogo.png" /></Card.Content>
                <Card.Content textAlign="center"><Card.Header>React</Card.Header></Card.Content>
            </Card>
            <Card>
                <Card.Content textAlign="center"><Image size="tiny" src="SQLLogo.png" /></Card.Content>
                <Card.Content textAlign="center"><Card.Header>SQL</Card.Header></Card.Content>
            </Card>
            <Card>
                <Card.Content textAlign="center"><Image size="tiny" src="RailsLogo.png" /></Card.Content>
                <Card.Content textAlign="center"><Card.Header>Rails</Card.Header></Card.Content>
            </Card>
        </Card.Group>
    </Segment>;

}