import React from 'react';

export interface onTestComponentChangeEvent {
  value: string
};
export type onTestComponentChange = (e: onTestComponentChangeEvent) => void | undefined;

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
   * Triggered when user changes value
   * @param {onTestComponentChangeEvent} e - Changed value
   */
  onChange: onTestComponentChange
};

const TestComponent = (props: TestComponentProps) => {
  const { id, label, value, onChange } = props;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      onChange({value: e.currentTarget.value});
    }
  };
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input id={id} autoComplete={'off'} value={value} onChange={handleChange} />
    </div>
  );
};

export default TestComponent;
