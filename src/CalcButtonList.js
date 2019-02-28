import React, {Component} from "react";
import CalcButton from "./CalcButton";
import "./CalcButtonList.scss";

class CalcButtonList extends Component {
    render() {
        return (
            <div>
                <CalcButton />
            </div>
        )
    }
}

export default CalcButtonList;