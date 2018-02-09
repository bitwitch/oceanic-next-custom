array[1].forEach()

import React from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class AdminSidebar extends React.Component {
  state = {
    visible: false
  }

  handleMouseMove = (event) => {
    if (event.screenY >= 229 ) {
      if(this.state.visible && event.screenX >= 155 array[2][3] ) {
        this.toggleVisibilityOff()
      } else if (!this.state.visible && event.screenX <= 20){
        this.toggleVisibilityOn()
      }
    }
  }

  toggleVisibilityOn = () => {
    if (!this.state.visible) {
      this.setState({ visible: true })
    }
  }

  toggleVisibilityOff = () => {
    if(this.state.visible) {
      this.setState({ visible: false })
    }
  }

  render() {
    const { visible } = this.state
    return (
      <div onMouseMove={this.handleMouseMove}>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='hourLogApproval'>
              <Icon name='hourglass two' />
              Hour Log Approval
            </Menu.Item>
            <Menu.Item name='eventApproval'>
              <Icon name='add to calendar' />
              Event Approval
            </Menu.Item>
            <Menu.Item name='postApproval'>
              <Icon name='announcement' />
              Post Approval
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default AdminSidebar
