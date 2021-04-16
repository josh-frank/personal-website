import { Container, Image } from "semantic-ui-react";

export default function MainPanel() {

    return <Container>
        <Image
            src="/JoshPixel.gif"
            alt="Pixel Josh coding"
            size="medium"
            floated="right"
            style={ { imageRendering: "pixelated" } }
        />
        <h1 className="header">Hello, I'm Josh</h1>
        <p style={ { fontSize: "14pt" } }>My work as an engineer, designer and media producer has always been informed by a belief in the value of speech. I believe in giving driven, passionate change-makers a distinctive voice for good in the world. For more than a decade, that belief has guided me in my work designing and producing websites, commercials, podcasts, and printed materials.</p>
        <p style={ { fontSize: "14pt" } }>My passion for well-structured code and attractive design has given a competitive edge to candidates, office holders, non-profits and Fortune 500 companies. I can't wait for the next opportunity to share my skills and help tell your story!</p>
    </Container>;

}