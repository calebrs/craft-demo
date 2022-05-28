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
          <input id="label" type="text" />
        </div>
        <div>
          <label htmlFor="type">
            Type
          </label>
          <select name="order" id="order">
            <option value="single">Single select</option>
            <option value="multi">Multi-select</option>
          </select>
          <input id="type" type="checkbox" value="" onChange="" />A value is required
        </div>
        <div>
          <label htmlFor="default-value">
            Default Value
          </label>
          <input id="default-value" type="text" />
        </div>
        <div>
          <label htmlFor="choices">
            Choices
          </label>
          <input id="default-value" type="text" placeholder="new choice" />
          <button>Add New Choice</button>
          <ul id="choice-list"></ul>
        </div>
        <div>
          <label htmlFor="order">
            Order
          </label>
          <select name="order" id="order">
            <option value="desc">Alphabetical Decsending</option>
            <option value="asc">Alphabetical Ascending</option>
          </select>
        </div>
        <div>
          <button type="submit">Save Changes</button>
          <button type="">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default FieldBuilder;