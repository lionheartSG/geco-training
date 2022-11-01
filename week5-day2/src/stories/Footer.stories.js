import React from 'react'
import { Footer } from "../components/Footer"

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: {
      backgroundColor: { control: 'color' },
      fontColor: {control: 'color'}
    },
  }
}

const Template = (args) => <Footer {...args} />

export const primary = Template.bind({}) //creating a copy of template

primary.args = {
  backgroundColor: 'white',
  fontColor: '',
  linkColor: ''
}
