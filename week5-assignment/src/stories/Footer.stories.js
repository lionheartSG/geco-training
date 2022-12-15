import React from 'react'
import Footer from "../modules/components/Footer/Footer"

export default {
  title: 'Components/Footer',
  component: Footer,
    argTypes: {
    customBackground: {
      customBackground: { control: 'color' },
    },
  }
}

const Template = (args) => <Footer {...args} />

export const CustomGrey = Template.bind({})

CustomGrey.args = {
  customBackground: 'black',
  customFontColor: 'white'
}
