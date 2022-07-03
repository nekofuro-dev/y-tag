import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

const StoryElement = Button;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'y-tag/Button',
  component: StoryElement,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof StoryElement>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StoryElement> = (args) => <StoryElement {...args}>Button</StoryElement>;

export const DefaultColor = Template.bind({});
DefaultColor.args = {
  colorVariant: 'primary'
}


export const NoneColor = Template.bind({});
NoneColor.args = {
  colorVariant: 'none'
}



