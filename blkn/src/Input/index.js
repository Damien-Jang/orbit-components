// @flow
import * as React from "react";
import Typography from "./../Typography";

type Props = {
  value: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => any,
  label?: string,
  error?: string,
};

const Input = (props: Props) => (
  <div>
    <label>
      {props.label && (
        <div>
          <Typography type="secondary">{props.label}</Typography>
        </div>
      )}
      <input value={props.value} onChange={props.onChange} />
    </label>
    {props.error && (
      <div>
        <Typography size="small" type="error">
          {props.error}
        </Typography>
      </div>
    )}
    <style jsx>{`
      input {
        border-radius: 3px;
        background-color: white;
        border: solid 1px #bac7d5;
        font-size: 16px;
        line-height: 1.25;
        padding: 12px 16px;
      }
      label div {
        font-size: 14px;
        line-height: 1.43;
      }
    `}</style>
  </div>
);

export default Input;
