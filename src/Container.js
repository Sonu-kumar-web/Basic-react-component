import React, { Component } from "react";

import Left from "./Left";

class Container extends Component {
   render() {
      return (
         <div className="container">
            <div className="internal-cont">
               <Left />
            </div>
         </div>
      );
   }
}

export default Container;
