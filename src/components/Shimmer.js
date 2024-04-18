const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-8">
      {
        Array(10).fill('').map((e,i)=>(
          <div className="w-[250px] h-[400px] border-3 bg-white border-violet-200"  key={i}>
            <div className="h-[250px] bg-gray-200 animate-pulse"></div>
            <div className="h-[20px] w-[200px] bg-gray-200 mt-2 animate-pulse"></div>
            <div className="h-[20px] w-[250px] bg-gray-200 mt-2 animate-pulse"></div>
            <div className="h-[20px] w-[150px] bg-gray-200 mt-2 animate-pulse"></div>
            <div className="h-[20px] w-[50px] bg-gray-200 mt-2 animate-pulse" ></div>
        </div>
        ))
        }
    </div>
  );
};
export default Shimmer;
