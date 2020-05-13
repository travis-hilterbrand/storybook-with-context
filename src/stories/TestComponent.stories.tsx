import React, { useState }  from 'react';
import { text } from "@storybook/addon-knobs";

import StoryContext from  '../StoryContext';
import TestComponent from '../TestComponent';

const withStoryContext = (story: any) => (
  <StoryContext>
    {story()}
  </StoryContext>
);

export default {
  component: TestComponent,
  title: 'TestComponent',
  decorators: [withStoryContext],
  parameters: {
  },
};

export const Default = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <TestComponent
        id={'test'}
        label={text('label', 'My Label')}
        value={value}
        onChange={(e) => setValue(e.value)}
      />
      <h4>Reflected value</h4>
     [{value}]
    </>
  );
};
