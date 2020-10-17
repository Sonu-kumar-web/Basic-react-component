import React, { Component } from "react";

class Right extends Component {
   render() {
      console.log("Right", this.props.state);
      const { isChecked, head, val } = this.props.state;
      return (
         <div className="right">
            <div className="left-detail">
               <h4>{head}</h4>
               <div className="right-detail">
                  {val.map((value, index) => (
                     <label key={index}>{value}</label>
                  ))}
               </div>
            </div>
         </div>
      );
   }
}

export default Right;
