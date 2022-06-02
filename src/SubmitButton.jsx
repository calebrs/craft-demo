import React, { useState } from "react";

const SubmitButton = ({ submitText, handleSubmit }) => {


  return (
    <div>
      <button type="submit" onClick={handleSubmit}>{submitText}</button>
      <button></button>
    </div>
  )
}