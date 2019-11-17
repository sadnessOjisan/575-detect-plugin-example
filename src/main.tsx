import * as React from "react";

import ReactDOM from "react-dom";

class App extends React.Component {
  static hoge() {
    !document.childNodes &&
      (() => {
        document;
      })();
  }

  render() {
    return <div>hello 575</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
