const Shimmer = () => {
  return (
    <div className="shimmer-div">
      {
        Array(10).fill('').map((e,i)=>(
          <div className="shimmer-card" key={i}>
            <div className="img"></div>
            <div className="single-line-data"></div>
            <div className="single-line-data"></div>
            <div className="single-line-data"></div>
            <div className="single-line-data"></div>
        </div>
        ))
        }
    </div>
  );
};
export default Shimmer;
