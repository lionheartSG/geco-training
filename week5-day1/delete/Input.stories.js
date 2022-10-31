import React from 'react'
import { Input } from "./Component"


//export components
export default {
  title: 'Component/Input',
  component: Input
}

const Template = (args) => <Input {...args} />


export const Normal = Template.bind({}) //creating a copy of template
Normal.args = {
  label: 'Normal',
  placeholder: 'Enter some string',
}

export const Number = Template.bind({}) //creating a copy of template
Number.args = {
  type: 'number',
  label: 'Number',
  placeholder: 'Enter some number',
}
