import React, { useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import marked from "marked";
import "react-markdown-editor-lite/lib/index.css";
const mdParser = new MarkdownIt();

function Plugins() {
  var [text, setText] = useState("dadada");

  const handleChange = (e) => {
    setText(e.target.value);
    localStorage.setItem("text", text);
  };

  const renderText = (text) => {
    const __html = marked(text, { sanitize: true });
    return { __html };
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <MdEditor
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleChange}
          />
        </div>
        <div className="col-sm-6">
          <div dangerouslySetInnerHTML={renderText(text)} />
        </div>
      </div>
    </div>
  );
}

export default Plugins;
