import ApiClient from "./ApiClient";
import React, { useState } from "react";
import styles from './FieldBuilder.module.css';

const FieldBuilder = () => {
  const [label, setLabel] = useState("");
  const [required, setRequired] = useState(false);
  const [defaultValue, setDefaultValue] = useState("");
  const [choices, setChoices] = useState("");
  const [displayAlpha, setDisplayAlpha] = useState(true);

  const validateForm = (fieldObj) => {
    let errMessage = "";

    if (fieldObj.label.length === 0) {
      errMessage += "-The \"Label\" field is required.\n";
    }

    // Checks for duplicates by creating a unique Set, then checking its length
    if (new Set(fieldObj.choicesArr).size !== fieldObj.choicesArr.length) {
      errMessage += "-Duplicate choices are not allowed.\n";
    }

    if (fieldObj.choicesArr.length > 50) {
      errMessage += "-There cannot be more than 50 choices.\n";
    }

    return errMessage;
  }

  const resetForm = () => {
    setLabel("");
    setRequired(false);
    setDefaultValue("");
    setChoices("");
    setDisplayAlpha(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const choicesArr = choices.split("\n")
      .map(choice => choice.trim())
      .filter(choice => choice !== "");

    if (!choicesArr.includes(defaultValue)) {
      choicesArr.unshift(defaultValue);
    }

    const fieldObj = {
      label,
      required,
      choicesArr,
      displayAlpha,
      defaultValue
    };

    const errMessage = validateForm(fieldObj);

    if (errMessage.length > 0) {
      alert(errMessage);
      return;
    }

    let success = await ApiClient.createField(fieldObj);

    if (success) {
      resetForm();
      console.log(fieldObj);
    };
  }

  return (
    <div className={styles.modal}>
      <h2>
        Field Builder
      </h2>
      <form>
        <div className="">
          <label htmlFor="label">
            Label
          </label>
          <input id="label" type="text" value={label} onChange={(e) => setLabel(e.target.value)} />
        </div>
        <div className="">
          <label htmlFor="type">
            Type
          </label>
          Multi-Select
          <input id="type" type="checkbox" checked={required} onChange={() => setRequired(!required)} />A value is required
        </div>
        <div className="">
          <label htmlFor="default-value">
            Default Value
          </label>
          <input id="default-value" type="text" value={defaultValue} onChange={(e) => setDefaultValue(e.target.value)} />
        </div>
        <div className="">
          <label htmlFor="choices">
            Choices
          </label>
          <textarea name="choices" id="choices-textarea" cols="40" rows="10" value={choices} onChange={(e) => setChoices(e.target.value)}></textarea>
        </div>
        <div className="">
          <label htmlFor="order">
            Order
          </label>
          <select name="order" id="order" value={displayAlpha} onChange={(e) => setDisplayAlpha(!displayAlpha)}>
            <option value="true">Display choices in Alphabetical</option>
            <option value="false">Display choices in the order they were added</option>
          </select>
        </div>
        <div className="">
          <button type="submit" onClick={handleSubmit}>Save Changes</button>
          <button onClick={(e) => { e.preventDefault(); resetForm() }}>Clear Form</button>
          <button type="">Cancel</button>
        </div>
      </form >
    </div >
  )
}

export default FieldBuilder;