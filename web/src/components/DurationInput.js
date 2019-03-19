import React, { useCallback, useState, useRef, useEffect } from 'react';
import { SubmitButton, ClearButton } from './IconButton';
import '../static/DurationInput.css';

export default function DurationInput(props) {
  const ref = useRef(null);
  const [value, update] = useState(props.defaultValue);

  const onChange = useCallback(
    e => {
      update(e.target.value);
    },
    [update],
  );

  const onSubmitClick = useCallback(() => {
    props.onClick(value || 0);
  }, [props.onClick, value]);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="duration-input">
      <input className="text duration-input--input" ref={ref} type="number" onChange={onChange} />
      <div className="duration-input--actions">
        <SubmitButton onClick={onSubmitClick} />
        <ClearButton onClick={props.onCancel} />
      </div>
    </div>
  );
}
