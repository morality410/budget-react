import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBallance from './DisplayBallance'

function DisplayBalances() {
    return (
        <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
            <DisplayBallance title="Income" value="1253.54" color="green"/>
            </Grid.Column>
            <Grid.Column>
            <DisplayBallance title="Expenses" value="623.50" color="red"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default DisplayBalances
