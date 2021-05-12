import Divier from "./divider";

type TitpProps = {
  title: string;
};

function Title({ title }: TitpProps) {
  return (
    <div className="main-title">
      <h1>{title}</h1>
      <Divier />
    </div>
  );
}

export default Title;
