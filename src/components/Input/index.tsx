import { BsPrefixProps } from "react-bootstrap/esm/helpers";

import Form from "react-bootstrap/Form";
import FormControl, { FormControlProps } from "react-bootstrap/FormControl";

import "./style.css";

type Props = FormControlProps &
	BsPrefixProps<"input"> & {
		controlId?: string;
		label?: string;
	};

export function Input({ controlId, label, ...rest }: Props) {
	return (
		<Form.Group controlId={controlId}>
			{label && <Form.Label className="mb-20px-negative">{label}</Form.Label>}
			<FormControl {...rest} />
		</Form.Group>
	);
}
