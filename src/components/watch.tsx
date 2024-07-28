import Number from "./number";

export default function Watch() {
  return (
    <div>
      <h1>Watch</h1>
      <div className="w-[400px] h-[400px] bg-yellow rounded-[100px] flex justify-center items-center">
        <div className="w-[370px] h-[370px] bg-green rounded-[100px] flex justify-center py-8">
          <div className="w-[300px] h-[200px] bg-primary rounded-[50px] flex justify-center items-center">
            <Number size={6} />
            {/* <Number size={8} />
            <Number size={8} />
            <Number size={8} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
