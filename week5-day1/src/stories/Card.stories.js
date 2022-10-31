import React from 'react'
import { RecipeReviewCard } from "./Card"


//export components
export default {
  title: 'RecipeReviewCard',
  component: RecipeReviewCard
}

const Template = (args) => <RecipeReviewCard {...args} />

export const red = Template.bind({}) //creating a copy of template
red.args = {
  backgroundColor: 'red'
}
