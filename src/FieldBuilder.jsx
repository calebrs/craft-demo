import React, { useState } from "react";
import styles from './FieldBuilder.module.css';

// Constants?

const FieldBuilder = () => {


  console.log(styles)


  return (
    <div className={styles.modal}>
      <h2>
        Field Builder
      </h2>
      <form fieldbuilder-form>
        <div className={styles.input_div}>
          <label htmlFor="label">
            Label
          </label>
          <input id="label" type="text" />
        </div>
        <div className={styles.input_div}>
          <label htmlFor="type">
            Type
          </label>
          <select name="order" id="order">
            <option value="single">Single select</option>
            <option value="multi">Multi-select</option>
          </select>
          <input id="type" type="checkbox" value="" onChange="" />A value is required
        </div>
        <div className={styles.input_div}>
          <label htmlFor="default-value">
            Default Value
          </label>
          <input id="default-value" type="text" />
        </div>
        <div className={styles.input_div}>
          <label htmlFor="choices">
            Choices
          </label>
          <input id="default-value" type="text" placeholder="new choice" />
          <button>Add New Choice</button>
          <ul id="choice-list"></ul>
        </div>
        <div className={styles.input_div}>
          <label htmlFor="order">
            Order
          </label>
          <select name="order" id="order">
            <option value="desc">Alphabetical Decsending</option>
            <option value="asc">Alphabetical Ascending</option>
          </select>
        </div>
        <div className={styles.input_div}>
          <button type="submit">Save Changes</button>
          <button type="">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default FieldBuilder;