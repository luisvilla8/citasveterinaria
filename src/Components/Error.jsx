const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-300 mb-5 pl-2 py-1 rounded-md text-red-700">
      <p>{ mensaje }</p>
    </div>
  );
}

export default Error
