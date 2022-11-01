import React from 'react'
import { Form } from "../components/Form"

export default {
  title: 'Components/Form',
  component: Form,
    argTypes: {
    customBackground: {
      customBackground: { control: 'color' },
      inputColor: { control: 'color' },
      labelColor: { control: 'color' },
    },
  }
}

const Template = (args) => <Form {...args} />

export const customGrey = Template.bind({})

customGrey.args = {
  customBackground: 'white',
  inputColor: '',
  labelColor: ''
}
