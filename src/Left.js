import React, { Component, Fragment } from "react";
import Right from "./Right";

class Left extends Component {
   state = { isChecked: false, head: "", val: [] };

   handleOnChange = (e) => {
      //   console.log("Checked", e.target.name);
      const { isChecked, head, val } = this.state;
      if (head === "") {
         this.setState({ head: e.target.name });
      }

      this.setState({
         isChecked: e.target.checked,
         val: e.target.checked === true ? [...val, e.target.value] : [...val],
      });
      //   console.log(this.state.isChecked);
   };

   render() {
      return (
         <Fragment>
            <div className="left">
               <div className="left-detail">
                  <h4>Portugal</h4>
                  <label>
                     {" "}
                     <input
                        type="checkbox"
                        name="Portugal"
                        value="Aasiya Jayavatan"
                        onChange={(e) => this.handleOnChange(e)}
                     />
                     Aasiya Jayavatan
                  </label>
                  <label>
                     {" "}
                     <input
                        type="checkbox"
                        name="Portugal"
                        value="Livleen Lawrence"
                        onChange={(e) => this.handleOnChange(e)}
                     />
                     Livleen Lawrence
                  </label>
                  <label>
                     {" "}
                     <input
                        type="checkbox"
                        value="Rey Mibourne"
                        name="Portugal"
                        onChange={(e) => this.handleOnChange(e)}
                     />
                     Rey Mibourne
                  </label>
                  <label>
                     {" "}
                     <input
                        type="checkbox"
                        name="Portugal"
                        value="Cayla Brister"
                        onChange={(e) => this.handleOnChange(e)}
                     />
                     Cayla Brister
                  </label>
               </div>
            </div>
            <Right state={this.state} />
         </Fragment>
      );
   }
}

export default Left;
