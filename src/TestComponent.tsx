import React from 'react';

export enum TestComponentsVariants {
  primary = 'primary',
  secondary = 'secondary',
};


export type onTestComponentChangeEvent = {
  value: string
};
export type onTestComponentChange = (event: onTestComponentChangeEvent) => void | undefined;

interface TestComponentProps {
  /**
   * id that ties label+input together
   */
  id: string
  /**
   * label for TestComponent
   */
  label: string
  /**
   * value for TestComponent
   */
  value:string
  /**
   * variant of the component
   */
  variant: TestComponentsVariants
  /**
   * Triggered when user changes value
   * @param {onTestComponentChangeEvent} event - Changed value
   */
  onChange: onTestComponentChange
};
const TestComponentDefaultProps = {
  id: null,
  label: null,
  variant: TestComponentsVariants.primary,
  value: null,
  onChange: function() {},
};

export const TestComponent = (props: TestComponentProps) => {
  const { id, label, value, variant, onChange } = props;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      onChange({value: e.currentTarget.value});
    }
  };
  const rootClass = ['root', variant].join(' ');
  return (
    <div className={rootClass}>
      <label htmlFor={id}>{label}:</label>
      <input id={id} autoComplete={'off'} value={value} onChange={handleChange} />
    </div>
  );
};
TestComponent.defaultProps = TestComponentDefaultProps;

export default TestComponent;
