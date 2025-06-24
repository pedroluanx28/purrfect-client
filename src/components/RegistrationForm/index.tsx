import { Input } from "@/components/Input";
import Form from "react-bootstrap/Form";

type RegistrationFormProps = {
	formType?: "login" | "register";
};

export function RegistrationForm({ formType = "login" }: RegistrationFormProps) {
	const isLogin = formType === "login";
	const title = isLogin ? "Login" : "Cadastro";

	return (
		<div className="text-center">
			<h3>{title}</h3>

			<Form className="d-flex flex-column gap-3 text-start">
				{!isLogin && <Input label="E-mail" type="email" placeholder="Digite seu E-mail" />}
				<Input label="Nome de usuário" type="text" placeholder="Digite seu Nome de usuário" />
				<Input label="Senha" type="password" placeholder="Digite sua senha" />
			</Form>
		</div>
	);
}
