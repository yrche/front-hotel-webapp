import React, {Component} from "react";
import {validator} from "./validator.js";
import {FormLogin} from "../../ui/index.js";

export class Validation extends Component {
    constructor(props) {
        super(props);
        this.valid = validator[this.props.type](this.props.value)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        this.valid = validator[this.props.type](nextProps.value)
        const isValid = !this.valid
        this.props.onValidate?.(isValid)
        return true
    }

    render() {
        return(
            <FormLogin type={this.props.type} placeHolder={this.props.placeHolder} value={this.props.value} onChange={this.props.onChange} error={this.valid}/>
        )
    }
}