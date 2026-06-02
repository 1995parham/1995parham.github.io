import Divider from "./divider";

type TitleProps = {
	title: string;
};

function Title({ title }: TitleProps) {
	return (
		<div className="main-title">
			<h1>{title}</h1>
			<Divider />
		</div>
	);
}

export default Title;
