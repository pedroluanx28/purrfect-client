import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z as zod } from "zod";
import axios from "axios";
import { Toast } from "@/mixins/swal";

import { Input } from "@/components/Input";

type RegistrationFormProps = {
	formType?: "login" | "register";
};

type Inputs = {
	email?: string;
	username: string;
	password: string;
};

export function RegistrationForm({ formType = "login" }: RegistrationFormProps) {
	const isLogin = formType === "login";
	const title = isLogin ? "Login" : "Cadastro";
	const submitButtonTitle = isLogin ? "Logar" : "Cadastrar";

	const emailValidation = isLogin
		? zod.string().email().optional()
		: zod.string().email("O e-mail deve ser válido");

	const schema = zod.object({
		email: emailValidation,
		username: zod.string().min(3, "O nome de usuário deve ter pelo menos 3 caracteres"),
		password: zod.string().min(6, "A senha deve ter pelo menos 6 caracteres")
	});

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Inputs>({
		resolver: zodResolver(schema)
	});

	async function handleRegistration(values: Inputs) {
		try {
			if (isLogin) {
				await axios.post("/api/login", values);
			}

			await axios.post("/api/register", values);
		} catch {
			Toast.fire({
				text: `Erro ao ${isLogin ? "logar" : "cadastrar"}`,
				icon: "error"
			});
		}
	}

	const titleIcon = isLogin ? "./assets/icons/cat-icon.png" : "./assets/icons/dog-icon.png";

	return (
		<div className="text-center">
			<h3>{title} <img src={titleIcon} alt="Title Icon" width={30} /></h3>

			<form
				className="d-flex flex-column gap-3 text-start"
				onSubmit={handleSubmit(handleRegistration)}
			>
				{!isLogin && (
					<Input
						label="E-mail"
						type="email"
						placeholder="Digite seu E-mail"
						errorMessage={errors.email?.message}
						{...register("email")}
					/>
				)}
				<Input
					label="Nome de usuário"
					type="text"
					placeholder="Digite seu Nome de usuário"
					errorMessage={errors.username?.message}
					{...register("username")}
				/>
				<Input
					label="Senha"
					type="password"
					placeholder="Digite sua senha"
					errorMessage={errors.password?.message}
					{...register("password")}
				/>

				<button type="submit" className="btn button-bg-light-purple-color-light">
					{submitButtonTitle}
				</button>
			</form>
		</div>
	);
}
