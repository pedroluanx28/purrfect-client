import { BsPrefixProps } from "react-bootstrap/esm/helpers";

import Form from "react-bootstrap/Form";
import FormControl, { FormControlProps } from "react-bootstrap/FormControl";

import "./style.css";

type Props = FormControlProps &
	BsPrefixProps<"input"> & {
		controlId?: string;
		label?: string;
		errorMessage?: string;
	};

export function Input({ controlId, label, errorMessage, ...rest }: Props) {
	return (
		<Form.Group controlId={controlId}>
			{label && <Form.Label className="mb-20px-negative">{label}</Form.Label>}
			<FormControl {...rest} className={errorMessage ? "border-danger" : ""} />
			{errorMessage && <span className="text-danger">{errorMessage}</span>}
		</Form.Group>
	);
}
