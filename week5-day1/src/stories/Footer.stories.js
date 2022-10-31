import React from 'react'
import Footer from "./Footer"

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    background: { control: 'color' },
  },
}

const Template = (args) => <Footer {...args} />

export const changeBackground = Template.bind({}) //creating a copy of template

changeBackground.args = {
  background: '#333333'
}
