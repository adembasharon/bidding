import React from "react";
const Clothing = () => {
  return (
    <div>
      <div className="land_container">
        <div className="land_textarea">
          <div>
            <h4>Description</h4>
          </div>
          <div>
            <textarea width={400} />
          </div>
        </div>
        <div>
          <select>
            <option>Size</option>
            <option>Small</option>
            <opion>Large</opion>
            <option>Medium</option>
          </select>
        </div>

        <div>
          <input type="text" placeholder="Upload image" />
        </div>
      </div>
    </div>
  );
};
export default Clothing;
