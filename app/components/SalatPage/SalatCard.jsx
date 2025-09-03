export function SalatCard(props) {
  const { salat, time } = props;
  return (
    <div className="flex-1 p-8 font-bold text-2xl text-center bg-blue-600 max-w-[300px] min-w-[300px] h-[192.29px] rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:scale-105">
      <h1 className="text-neutral-200 text-shadow-white">{salat}</h1>
      <p className="text-neutral-200 text-shadow-white">{time}</p>
    </div>
  );
}
