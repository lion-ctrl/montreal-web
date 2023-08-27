/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
  initialState?: Record<
    string,
    { value: string | number; isValid: boolean; message: string }
  >;
  style?: React.CSSProperties;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

interface ItemProps {
  children: React.ReactElement;
  label: string;
  name: string;
  rules?: {
    disabled?: boolean;
    max?: number;
    message?: string;
    min?: number;
    required?: boolean;
    type?: 'text' | 'number' | 'email';
    validator?: (
      value: any,
      formValues: any
    ) => { isValid: boolean; message?: string };
  };
}

const FormContext = createContext<
  | {
      state: Record<
        string,
        { value: string | number; isValid: boolean; message: string }
      >;
      handleChange: (props: {
        e: any;
        required: boolean;
        validation?: 'email';
      }) => void;
    }
  | undefined
>(undefined);

export const Form = ({
  children,
  initialState = {},
  style,
  onSubmit,
}: Props) => {
  const [state, setState] = useState(initialState);

  const handleChange = ({
    e,
    required,
    validation,
  }: {
    e: any;
    required: boolean;
    validation?: 'email';
  }) => {
    const name = e.target.name as string;
    const value = e.target.value as string;

    if (value.length && validation) {
      const regex =
        /^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$/;

      let newState = { value, isValid: true, message: '' };
      if (!regex.test(value)) {
        newState = { value, isValid: false, message: `Enter a valid email.` };
      }

      setState((state: any) => ({
        ...state,
        [name]: newState,
      }));
      return;
    }

    if (required) {
      setState({
        ...state,
        [name]: {
          value,
          isValid: !!value.length,
          message: value.length ? '' : `Is a required field.`,
        },
      });
      return;
    }

    setState({
      ...state,
      [name]: { value, isValid: true, message: '' },
    });
  };

  return (
    <FormContext.Provider value={{ state, handleChange }}>
      <form className="ui-form" role="form" style={style} onSubmit={onSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

const Item = ({ children, label, name, rules }: ItemProps) => {
  const child = React.Children.only(children);

  const formContext = useContext(FormContext);
  if (!formContext) {
    throw new Error('This <Item/> must be used within a <Form/> component.');
  }

  const { state, handleChange } = formContext;

  return (
    <div className="ui-form_group" id={`${name}-item`}>
      <label
        className={`ui-form_label ${
          rules?.required ? 'required' : 'not-required'
        }`}
        htmlFor={name}
      >
        {label}
      </label>
      {React.cloneElement(child, {
        disabled: !!rules?.disabled,
        error: !state[name]?.isValid,
        max: rules?.max && rules?.type === 'number' ? rules.max : undefined,
        maxLength:
          rules?.max && rules?.type !== 'number' ? rules.max : undefined,
        min: rules?.max && rules?.type === 'number' ? rules.min : undefined,
        name,
        type: rules?.type ?? 'text',
        showCount: !!(rules?.max && rules?.type !== 'number'),
        value: state[name]?.value || '',
        onChange: (e: any) => {
          handleChange({
            e,
            required: !!rules?.required,
            validation: rules?.type === 'email' ? 'email' : undefined,
          });
        },
      })}
      <span className="ui-form_error">
        {!state[name]?.isValid ? rules?.message ?? state[name]?.message : ''}
      </span>
    </div>
  );
};

Form.Item = Item;
