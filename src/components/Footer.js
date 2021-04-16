import { Menu } from "semantic-ui-react";

export default function Footer() {

    return (
        <Menu
            inverted
            style={ { marginTop: "10px" } }
        >
            <div style={ { color: "white", marginLeft: "auto", marginRight: "auto", marginTop: "10px" } }>
                © { new Date().getFullYear() } Josh Frank
            </div>
        </Menu>
    );

}