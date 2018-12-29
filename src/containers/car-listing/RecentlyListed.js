import React from 'react';
import { Grid, Image } from 'semantic-ui-react'

const RecentlyListed = (props) => {
    return (
        <React.Fragment>
        { 
        	[1,2,3,4,5].map( (i) => (
        		<Grid.Row key={i}>
			      <Grid.Column width={7} style={{paddingRight: '0px'}}>
			        <Image style={{width: '100%'}} src={props.imageSrc} />
			      </Grid.Column>
			      <Grid.Column width={9}>
			        <h4 style={{marginBottom: '1px'}}>Mercedes Benz</h4>
			        <p>$ 100 per day</p>
			      </Grid.Column>
			    </Grid.Row>
    			) 
        	) 
        }
        </React.Fragment>
    );
};

RecentlyListed.displayName = 'RecentlyListed';

export default RecentlyListed;
