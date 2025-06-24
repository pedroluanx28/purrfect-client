import { Button } from "@/components/Button";

import "./style.css";

export function Home() {
	const title = "Purrfect".split("");
	const subtitleAnimationDelay = { animationDelay: `${title.length * 0.3}s` };

	return (
		<div className="h-100vh home-container gap-10">
			<div className="mt-5 text-center">
				<h1 className="home-title">
					{title.map((char, index) => {
						const titleAnimationDelay = {
							animationDelay: `${index * 0.25}s`
						} as const;

						return (
							<span key={index} className="letter" style={titleAnimationDelay}>
								{char}
							</span>
						);
					})}
				</h1>
				<h6 className="home-subtitle" style={subtitleAnimationDelay}>
					Online Pet Shop
				</h6>
			</div>

			<div className="d-flex gap-4">
				<Button
					buttonClassName="btn button-bg-light-purple-color-light py-3 w-13rem fw-semibold"
					to="/registration"
				>
					<Button.Icon src="/assets/icons/cat-icon.png" alt="Cat Icon" />
					Começar
					<Button.Icon src="/assets/icons/dog-icon.png" alt="Cat Icon" position="right" />
				</Button>
			</div>
		</div>
	);
}
