import { useState } from "react";

import { Input } from "@/components/Input";

type RegistrationFormProps = {
	formType?: "login" | "register";
};

export function RegistrationForm({ formType = "login" }: RegistrationFormProps) {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const isLogin = formType === "login";
	const title = isLogin ? "Login" : "Cadastro";
	const submitButtonTitle = isLogin ? "Logar" : "Cadastrar";

	function handleSubmit(event: any) {
		console.log(email, username, password);
	}

	return (
		<div className="text-center">
			<h3>{title}</h3>

			<form className="d-flex flex-column gap-3 text-start">
				{!isLogin && (
					<Input
						label="E-mail"
						type="email"
						placeholder="Digite seu E-mail"
						value={email}
						onChange={(event) => setEmail(event.currentTarget.value)}
					/>
				)}
				<Input
					label="Nome de usuário"
					type="text"
					placeholder="Digite seu Nome de usuário"
					value={username}
					onChange={(event) => setUsername(event.currentTarget.value)}
				/>
				<Input
					label="Senha"
					type="password"
					placeholder="Digite sua senha"
					value={password}
					onChange={(event) => setPassword(event.currentTarget.value)}
				/>

				<button onClick={handleSubmit}>{submitButtonTitle}</button>'
			</form>
		</div>
	);
}
