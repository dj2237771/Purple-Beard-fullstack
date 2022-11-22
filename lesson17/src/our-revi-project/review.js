import React from "react";

function ReviewPage() {
  job = "devloper";
  name = "jon";
  reviwText =
    "To do a line break in HTML, use the <br> tag. Simply place the tag wherever you want to force a line break. Since an HTML line break is an empty element, there’s no closing tag.";
  return (
    <div>
      <h1>Our Review</h1>
      <div>
        <image></image>
        <p>
          <br>{name}</br>
          <br>{job}</br>
          <br>{reviwText}</br>
          <button></button>
          <button></button>
          <button></button>
        </p>
      </div>
    </div>
  );
}
export default ReviewPage;
