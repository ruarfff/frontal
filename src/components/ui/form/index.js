import React from "react";
import { FormWrap } from './form.style'
import { FormGroup } from './form-group'
import { Error } from './error'
import { Input } from './input.style'
import { Select } from './select.style'
import { Textarea } from './textarea.style'

const Form = ({ children, ...props }) => {
	return <FormWrap {...props}>{children}</FormWrap>
}

export { FormGroup, Input, Select, Textarea, Error };

export default Form
