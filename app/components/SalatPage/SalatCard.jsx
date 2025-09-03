export function SalatCard(props) {
  const { salat, time } = props;
  return (
    <div className="h-[192.29px] min-w-[250px] max-w-[300px] flex-1 rounded-lg bg-blue-600 p-8 text-center text-2xl font-bold transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-500">
      <h1 className="text-neutral-200 text-shadow-white">{salat}</h1>
      <p className="text-neutral-200 text-shadow-white">{time}</p>
    </div>
  );
}
