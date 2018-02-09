import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class AdminSidebar extends Component {
  state = {
    visible: false,
  }

  handleMouseMove = (e) => {
    if (e.screenY >= 229 ) {
      if(this.state.visible && e.screenX >= 155) {
        this.toggleVisibilityOff()
      } else if (!this.state.visible && e.screenX <= 20){
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
      this.setState({ visible: false})
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
