import React from 'react'
import { Grid, Image, Icon, Button } from 'semantic-ui-react'

const styles = {
    grid: {
        marginLeft: '90px', marginRight: '90px', paddingTop: '15px', paddingBottom: '5px' 
    },
    header: {marginBottom: '0px'}
};

export default function Header() {
  return (
    <Grid style={styles.grid}>
        <Grid.Column width={4}>
            <Image src="/images/logg.png"></Image>
        </Grid.Column>
        <Grid.Column width={4}>

            <Grid>
                <Grid.Column width={3}> <Icon name="mail" size="large"></Icon> </Grid.Column>
                <Grid.Column width={13}>
                    <h4 style={styles.header}>FOR SUPPORT MAIL US:</h4>
                    <p>carrental@gmail.com</p>
                </Grid.Column>
            </Grid>

        </Grid.Column>
        <Grid.Column width={4}>
            <Grid>
                <Grid.Column width={3}> <Icon name="phone" size="large"></Icon> </Grid.Column>
                <Grid.Column width={13}>
                    <h4 style={styles.header}>SERVICE HELPLINE CALL US:</h4>
                    <p>09034433454</p>
                </Grid.Column>
            </Grid>
        </Grid.Column>

        <Grid.Column width={4}>
            <div>
                <Button circular color='facebook' icon='facebook' />
                <Button circular color='twitter' icon='twitter' />
                <Button circular color='linkedin' icon='linkedin' />
                <Button circular color='google plus' icon='google plus' />
                <p>Welcome to the Car rental portal</p>
            </div>
        </Grid.Column>
    </Grid>
  )
}
