import React, { useState } from "react";

// Constants?

const FieldBuilder = () => {
  return (
    <div className="fieldbuilder-modal">
      <h2>
        Field Builder
      </h2>
      <form fieldbuilder-form>
        <div>
          <label htmlFor="label">
            Label
          </label>
          <input id="label" type="text" value="" onChange="" />
        </div>
      </form>
    </div>
  )
}

export default FieldBuilder;