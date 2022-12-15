import React from 'react'
import Header from "../modules/components/Header/Header"

export default {
  title: 'Components/Header',
  component: Header,
    argTypes: {
    customBackground: {
      customBackground: { control: 'color' },
    },
    customFontColor: {
      customFontColor: { control: 'color'}
    }
  }
}

const Template = (args) => <Header {...args} />

export const TransparentHeader = Template.bind({})

TransparentHeader.args = {
  customBackground: 'red',
  customFontColor: 'white'
}
