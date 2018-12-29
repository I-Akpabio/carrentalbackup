import React from 'react'
import { Table, Icon } from 'semantic-ui-react'
export default function Accessories({ data }) {
  return (
    <div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ACCESSORIES</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Air Conditioner</Table.Cell>
            <Table.Cell>
              <Icon
                color={data.AirConditioner ? 'green' : 'red'}
                name={data.AirConditioner ? 'checkmark' : 'close'}
                size="large"
              />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>AntiLock Braking System</Table.Cell>
            <Table.Cell>
              <Icon
                color={data.AntiLockBrakingSystem ? 'green' : 'red'}
                name={data.AntiLockBrakingSystem ? 'checkmark' : 'close'}
                size="large"
              />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Power Steering</Table.Cell>
            <Table.Cell>
              <Icon
                color={data.PowerSteering ? 'green' : 'red'}
                name={data.PowerSteering ? 'checkmark' : 'close'}
                size="large"
              />
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Power Windows</Table.Cell>
            <Table.Cell>
              <Icon
                color={data.PowerWindows ? 'green' : 'red'}
                name={data.PowerWindows ? 'checkmark' : 'close'}
                size="large"
              />
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>CD Player</Table.Cell>
            <Table.Cell>
              <Icon
                color={data.CDPlayer ? 'green' : 'red'}
                name={data.CDPlayer ? 'checkmark' : 'close'}
                size="large"
              />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Leather Seats</Table.Cell>
            <Table.Cell>
              <Icon
                color={data.LeatherSeats ? 'green' : 'red'}
                name={data.LeatherSeats ? 'checkmark' : 'close'}
                size="large"
              />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>CenTable.Rowal Locking</Table.Cell>
            <Table.Cell>
              <Icon
                color={data.CentralLocking ? 'green' : 'red'}
                name={data.CentralLocking ? 'checkmark' : 'close'}
                size="large"
              />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Power Door Locks</Table.Cell>
            <Table.Cell>
              <Icon
                color={data.PowerDoorLocks ? 'green' : 'red'}
                name={data.PowerDoorLocks ? 'checkmark' : 'close'}
                size="large"
              />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Brake Assist</Table.Cell>
            <Table.Cell>
              <Icon
                color={data.BrakeAssist ? 'green' : 'red'}
                name={data.BrakeAssist ? 'checkmark' : 'close'}
                size="large"
              />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Driver Airbag</Table.Cell>
            <Table.Cell>
              <Icon
                color={data.DriverAirbag ? 'green' : 'red'}
                name={data.DriverAirbag ? 'checkmark' : 'close'}
                size="large"
              />
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Passenger Airbag</Table.Cell>
            <Table.Cell>
              <Icon
                color={data.PassengerAirbag ? 'green' : 'red'}
                name={data.PassengerAirbag ? 'checkmark' : 'close'}
                size="large"
              />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Crash Sensor</Table.Cell>
            <Table.Cell>
              <Icon
                color={data.CrashSensor ? 'green' : 'red'}
                name={data.CrashSensor ? 'checkmark' : 'close'}
                size="large"
              />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}
