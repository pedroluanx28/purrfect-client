import { useState } from "react";

import "./style.css";
import { RegistrationForm } from "@/components/RegistrationForm";

type FormType = "login" | "register";

type RegistrationProps = {
	formType?: FormType;
};

export function Registration({ formType = "login" }: RegistrationProps) {
	const [formTypeValue, setFormTypeValue] = useState<FormType>(formType);
	const [inTransition, setInTransition] = useState(false);

	const isLoginScreen = formTypeValue === "login";

	function handleClickLink(formType: FormType) {
		if (inTransition) {
			return;
		}

		setFormTypeValue(formType);
		setInTransition(true);

		const animationDuration = 700; // Duration in milliseconds

		const formContainer = document.querySelector("#form-container");

		if (!formContainer) {
			return;
		}

		formContainer.classList.add("fadeInAnimation");

		setTimeout(() => {
			formContainer.classList.remove("fadeInAnimation");
			setInTransition(false);
		}, animationDuration);
	}

	return (
		<div className="d-flex flex-column align-items-center gap-4 justify-content-center p-5 position-relative w-100 h-100vh">
			<div
				className="border rounded p-4 transition-all"
				style={{
					transform: isLoginScreen ? "translateX(-100%)" : "translateX(100%)"
				}}
			>
				<div id="form-container">
					{isLoginScreen ? (
						<div className="d-flex flex-column gap-3">
							<RegistrationForm formType="register" />
							<span>
								Ainda não tem conta?{" "}
								<a onClick={() => handleClickLink("register")} className="change-form-link">
									Cadastre-se
								</a>
							</span>
						</div>
					) : (
						<div className="d-flex flex-column gap-3">
							<RegistrationForm />
							<span>
								Já tem uma conta?{" "}
								<a onClick={() => handleClickLink("login")} className="change-form-link">
									Logar
								</a>
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
