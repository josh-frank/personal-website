import { Card, Icon, Image, Label, List, Segment } from "semantic-ui-react";

export default function SoftwarePanel() {

    return <Segment raised>
        <h1 className="header">Software</h1>
        <Card.Group itemsPerRow={ 4 }>
            <Card>
                <Image src='/software/fludoku.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Fludoku</Card.Header>
                    <a href="https://fludoku.netlify.app/" target="_blank" rel="noreferrer">
                        <Icon circular name="chain" />
                    </a>
                </Card.Content>
                <Card.Content>
                    <Card.Meta>
                        <Label.Group size="tiny">
                            <Label tag>JavaScript</Label>
                            <Label tag>Backtracking</Label>
                            <Label tag>Depth-first search</Label>
                            <Label tag>Rails API</Label>
                        </Label.Group>
                    </Card.Meta>
                    <Card.Description style={ { fontStyle: "italic" } }>
                        A Sudoku game with board generator/solver in JavaScript
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <List bulleted>
                        <List.Item>Uses a backtracking algorithm to recursively generate solved boards and puzzles</List.Item>
                        <List.Item>Single-page application built in pure JavaScript with Rails back end</List.Item>
                    </List>                    
                </Card.Content>
            </Card>
            <Card>
                <Image src='/software/pokerpuzzle.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Poker Puzzle</Card.Header>
                    <a href="https://poker-puzzle.netlify.app/" target="_blank" rel="noreferrer">
                        <Icon circular name="chain" />
                    </a>
                </Card.Content>
                <Card.Content>
                    <Card.Meta>
                        <Label.Group size="tiny">
                            <Label tag>JavaScript</Label>
                            <Label tag>Bitwise histogram</Label>
                            <Label tag>Depth-first search</Label>
                            <Label tag>Vector graphics</Label>
                        </Label.Group>
                    </Card.Meta>
                    <Card.Description style={ { fontStyle: "italic" } }>
                            A grid-based poker solitaire game in JavaScript
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <List bulleted>
                        <List.Item>Uses an algorithm based on bitwise histograms to calculate poker hands</List.Item>
                        <List.Item>Breadth-first search for ranking hands on a matrix</List.Item>
                        <List.Item>Written in pure JavaScript with custom vector card graphics</List.Item>
                    </List>
                </Card.Content>
            </Card>
            <Card>
                <Image src='/software/buythebolt.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Buy the Bolt</Card.Header>
                    <a href="https://buythebolt.netlify.app/" target="_blank" rel="noreferrer">
                        <Icon circular name="chain" />
                    </a>
                </Card.Content>
                <Card.Content>
                    <Card.Meta>
                        <Label.Group size="tiny">
                            <Label tag>React</Label>
                            <Label tag>Redux</Label>
                            <Label tag>Rails</Label>
                            <Label tag>WebSocket</Label>
                        </Label.Group>
                    </Card.Meta>
                    <Card.Description style={ { fontStyle: "italic" } }>
                        A React-based e-commerce app for the textile arts 
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <List bulleted>
                        <List.Item>Front end built with JavaScript, React and Redux; back end built with Ruby on Rails</List.Item>
                        <List.Item>Chat feature using WebSockets with ActionCable enabling real-time conversations between users</List.Item>
                        <List.Item>Sleek, minimalist design with custom fonts and Semantic UI</List.Item>
                    </List>
                </Card.Content>
            </Card>
            <Card>
                <Image src='/software/hexaword.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Hexaword</Card.Header>
                    <a href="https://hex-a-word.netlify.app/" target="_blank" rel="noreferrer">
                        <Icon circular name="chain" />
                    </a>
                </Card.Content>
                <Card.Content>
                    <Card.Meta>
                        <Label.Group size="tiny">
                            <Label tag>React</Label>
                            <Label tag>Redux</Label>
                            <Label tag>Vector graphics</Label>
                            <Label tag>RegExp</Label>
=                        </Label.Group>
                    </Card.Meta>
                    <Card.Description style={ { fontStyle: "italic" } }>
                        A word game built in React and Redux 
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <List bulleted>
                        <List.Item>Front end built with React, Redux for state management</List.Item>
                        <List.Item>Styling with Semantic UI and custom SVG graphics</List.Item>
                    </List>
                </Card.Content>
            </Card>
        </Card.Group>
    </Segment>;

}