import React from 'react'
import { Button, Icon, Menu } from 'semantic-ui-react'
import { Container } from "semantic-ui-react";

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top" size="large">
                <Container>
                    <Menu.Item name="street view">
                        <Icon name="street view" size="large" />
                        HRMS
                    </Menu.Item>
                    <Menu.Item name="Home" />
                    <Menu.Item name="Job Posting" />
                    <Menu.Item name="Corporations " />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button.Group>
                                <Button positive>Sign In</Button>
                                <Button negative color='red'>Sign up</Button>
                            </Button.Group>
                        </Menu.Item>

                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
