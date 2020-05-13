import React from 'react'

interface StoryContextProps {
  children?: React.ReactElement | React.ReactElement[]
}

const StoryContext = (props: StoryContextProps) => {
  const { children } = props;
  return (
    <>
      {children}
    </>
  );
};

export default StoryContext