import React from 'react'
import { AboutUs } from "../modules/components/AboutUs/AboutUs"

export default {
  title: 'Components/AboutUs',
  component: AboutUs,
}

const Template = (args) => <AboutUs {...args} />

export const Normal = Template.bind({})

Normal.args = {
  customBackground: 'grey'
}
