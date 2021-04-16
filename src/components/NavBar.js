import { useState } from "react";
import { Icon, Menu } from "semantic-ui-react";
import Links from "./Links";

export default function NavBar () {

    const [ displayLinks, toggleDisplayLinks ] = useState( false );

    return <>
        <Menu borderless inverted stackable attached="top">
            <Menu.Item position="left">
                <h1 className="logo">Josh Frank</h1>
            </Menu.Item>
            <Menu.Item position="right">
                <a href="https://www.linkedin.com/in/josh-frank-10018997/" target="_blank" rel="noreferrer">
                    <Icon name="linkedin" size="big" />
                </a>
                <a href="https://github.com/josh-frank" target="_blank" rel="noreferrer">
                    <Icon name="github square" size="big" />
                </a>
                <a href="https://joshgoestoflatiron.medium.com/" target="_blank" rel="noreferrer">
                    <Icon name="medium" size="big" />
                </a>
            </Menu.Item>
            <Menu.Item>
                <Icon name="bars" size="huge" onClick={ () => toggleDisplayLinks( !displayLinks ) }/>
            </Menu.Item>
        </Menu>
        <Links display={ displayLinks } />
    </>;

}
