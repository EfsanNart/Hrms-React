import React from 'react';
import { Grid, GridColumn } from "semantic-ui-react";
import SideBar from "./SideBar";
import Section from "./Section";


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <SideBar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Section />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
