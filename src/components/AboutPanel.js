import { Image, Segment } from "semantic-ui-react";

export default function AboutPanel() {

    return <Segment raised>
        <h1 className="header">About Josh</h1>
        <Image src="/JoshHeadshot.jpeg" alt="Headshot" size="tiny" floated="left" circular />
        <p>Josh obtained his BA from Oberlin College in Ohio in 2014. Raised in New Jersey where his career has been mostly focused, he now lives in New York City. He began coding as a hobby during his youth and refined his skills as a graduate of Flatiron School's Software Engineering Intensive in late 2020/2021.</p>
        <p>Josh is also a skilled sewing machine technician and amateur tailor, with especial expertise in mid-century modern European sewing machines. He has repaired hundreds of antique sewing machines and loves to sew shirts and suits. In his free time he can also be found composting, fermenting kimchi, and taking walks through Central Park and New York's many wonderful museums, galleries and fabric shops.</p>
    </Segment>;

}