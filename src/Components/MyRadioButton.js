import React from "react";

export default function MyRadioButton({
  showAll = true,
  setCategory,
  category,
}) {
  return (
    <div className="MyRadioButton">
      <div
        className={
          category === "Basic"
            ? "radio-input radio-input-selected"
            : "radio-input"
        }
      >
        <label>
          <input
            type="radio"
            name="category"
            value="Basic"
            checked={category === "Basic"}
            onChange={(e) => setCategory(e.target.value)}
          />
          Basic
        </label>
      </div>
      <div
        className={
          category === "Medium Class"
            ? "radio-input radio-input-selected"
            : "radio-input"
        }
      >
        <label>
          <input
            type="radio"
            name="category"
            value="Medium Class"
            checked={category === "Medium Class"}
            onChange={(e) => setCategory(e.target.value)}
          />
          Medium Class
        </label>
      </div>
      <div
        className={
          category === "Large-scale"
            ? "radio-input radio-input-selected"
            : "radio-input"
        }
      >
        <label>
          <input
            type="radio"
            name="category"
            value="Large-scale"
            checked={category === "Large-scale"}
            onChange={(e) => setCategory(e.target.value)}
          />
          Large-scale
        </label>
      </div>
      {showAll && (
        <div
          className={
            category === "All"
              ? "radio-input radio-input-selected"
              : "radio-input"
          }
        >
          <label>
            <input
              type="radio"
              name="category"
              value="All"
              checked={category === "All"}
              onChange={(e) => setCategory(e.target.value)}
            />
            All
          </label>
        </div>
      )}
    </div>
  );
}
