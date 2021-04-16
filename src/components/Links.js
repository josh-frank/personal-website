import { Button, Menu, Transition } from "semantic-ui-react";
import { HashLink as Link } from 'react-router-hash-link';

export default function Links( { display } ) {

    return <Transition visible={ display } animation="fade down" duration={ 500 }>
        <Menu
            borderless
            inverted
            attached="bottom"
        >
            <Menu.Item as={ Button }>
                <Link to="#about">About</Link>
            </Menu.Item>
            <Menu.Item as={ Button }>
            <Link to="#skills">Skills</Link>
            </Menu.Item>
            <Menu.Item as={ Button }>
            <Link to="#software">Software</Link>
            </Menu.Item>
            <Menu.Item as={ Button }>
                <Link to="#design">Design</Link>
            </Menu.Item>
            <Menu.Item as={ Button }>
                <Link to="#production">Production</Link>
            </Menu.Item>
            <Menu.Item as={ Button }>
                <Link to="#contact">Contact</Link>
            </Menu.Item>
        </Menu>
    </Transition>;

}
