import React, { useId, useState } from "react";

// import { Container } from './styles';

function Input({
  id,
  type = "text",
  placeholder = "enter some value here",
  name = "My Input",
  className,
  handleChange,
  value,
  ...props
}) {
  const myId = useId();

  return (
    <>
      <input
        id={id || myId}
        className={`border-2 border-grey-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400 w-full ${className}`}
        type={type}
        placeholder={placeholder}
        name={name}
        {...props}
        onChange={handleChange?handleChange : null}
        value={value}
      />
    </>
  );
}

export { Input };
