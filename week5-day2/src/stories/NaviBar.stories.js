import React from 'react'
import { NaviBar } from "../components/NaviBar"

export default {
  title: 'Components/NaviBar',
  component: NaviBar,
    argTypes: {
    variant: {
      options: ['light', 'dark'],
      control: {type: 'radio'},
    },
    bg: {
      options: ['light', 'dark'],
      control: {type: 'radio'},
    },
    customBackground: {
      customBackground: { control: 'color' },
    },
  }
}

const Template = (args) => <NaviBar {...args} />

export const whiteVersion = Template.bind({}) //creating a copy of template

whiteVersion.args = {
  bg: 'light',
  variant: 'light',
  customBackground: ''
}

export const customGrey = Template.bind({}) //creating a copy of template

customGrey.args = {
  customBackground: 'grey'
}
