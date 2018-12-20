import React from 'react'
import { Table, Icon} from 'semantic-ui-react';

export default function Accessories() {
  return (
    <div>
    <Table>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>ACCESSORIES</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
             <Table.Row>
                <Table.Cell>Air Conditioner</Table.Cell>
                <Table.Cell><Icon color='green' name='checkmark' size='large' /></Table.Cell>
            </Table.Row>
             <Table.Row>
                <Table.Cell>Power Steering</Table.Cell>
                <Table.Cell><Icon color='green' name='checkmark' size='large' /></Table.Cell>
            </Table.Row>
             <Table.Row>
                <Table.Cell>Power Windows</Table.Cell>
                <Table.Cell><Icon color='green' name='checkmark' size='large' /></Table.Cell>
            </Table.Row>
             <Table.Row>
                <Table.Cell>CD Player</Table.Cell>
                <Table.Cell><Icon color='green' name='checkmark' size='large' /></Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
</div>
  )
}
