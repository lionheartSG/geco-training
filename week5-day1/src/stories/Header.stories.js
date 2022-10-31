import React from 'react'
import { Header } from "./Header"


//export components
export default {
  title: 'Header',
  component: Header
}

const Template = (args) => <Header {...args} />

export const loggedOut = Template.bind({}) //creating a copy of template
loggedOut.args = {
  login: false,
  backgroundColor: 'white'
}

export const loggedIn = Template.bind({}) //creating a copy of template
loggedIn.args = {
  login: true,
  backgroundColor: 'red'
}
