import { ImgHTMLAttributes, ReactNode } from "react";
import classNames from "clsx";
import { Link } from "react-router";

import "./style.css";

type ButtonProps = {
	buttonClassName?: string;
	children?: ReactNode;
	to?: string;
};

type IconProps = ImgHTMLAttributes<HTMLImageElement> & {
	position?: "left" | "right";
};

export function Button({ children, buttonClassName, to = "#" }: ButtonProps) {
	return (
		<Link
			to={to}
			className={classNames(buttonClassName, "position-relative overflow-hidden button-container")}
		>
			{children}
		</Link>
	);
}

function Icon({ width = 50, height = 50, position = "left", ...rest }: IconProps) {
	const isLeft = position === "left"

	return (
		<div
			className={classNames("position-absolute bottom-negative transition", {
				"left-negative": isLeft,
				"right-negative": !isLeft
			})}
		>
			<img {...rest} width={width} height={height} />
		</div>
	);
}

Button.Icon = Icon;
