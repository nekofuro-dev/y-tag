import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { DropDown } from './DropDown';

const StoryElement = DropDown;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'y-tag/DropDown',
  component: StoryElement,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof StoryElement>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StoryElement> = (args) => <StoryElement {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  dropDownData: {
    id: 1,
    label: 'Options',
    dropDownItemList: [
      {
        label: 'Item 1',
        url: 'https://www.google.com/'
      },
      {
        label: 'Item 2',
        url: 'https://www.google.com/'
      },
      {
        label: 'Item 3',
        url: 'https://www.google.com/'
      }
    ]
  }
};
