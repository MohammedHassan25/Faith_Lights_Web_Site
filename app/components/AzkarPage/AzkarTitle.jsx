export function AzkarTitle(props) {
  const { title } = props;
  return (
    <button className="text-2xl font-bold bg-cyan-500 p-2 rounded-lg mb-4">{title}</button>
  );
}
