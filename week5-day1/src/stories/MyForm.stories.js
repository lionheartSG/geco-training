import React from 'react'
import { MyForm } from "./MyForm"

export default {
  title: 'Components/MyForm',
  component: MyForm,
  argTypes: {
    variant: {
      options: ['primary','secondary','danger','warning'],
      control: {type: 'radio'},
    }
  }
}

const Template = (args) => <MyForm {...args} />

export const click = Template.bind({})

click.args = {
  variant: "secondary",
  buttontext: "Click Me"
}
