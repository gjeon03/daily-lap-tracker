import Number from "./number";

export default function Watch() {
  return (
    <div>
      <h1>Watch</h1>
      <div className="w-[420px] h-[400px] bg-yellow rounded-[100px] flex justify-center items-center">
        <div className="w-[390px] h-[370px] bg-green rounded-[100px] flex justify-center py-8">
          <div className="w-[340px] h-[200px] bg-primary rounded-[50px] flex justify-center items-center">
            <div className="flex items-end justify-center gap-x-2 h-[80px]">
              <Number size={6} number={1} />
              <Number size={6} number={7} />
              <div className="flex flex-col justify-center items-center gap-y-5 h-full">
                <div className="bg-secondary w-[8px] h-[8px] rounded-full" />
                <div className="bg-secondary w-[8px] h-[8px] rounded-full" />
              </div>
              <Number size={6} number={8} />
              <Number size={6} number={9} />
              <div className="bg-secondary w-[8px] h-[8px] rounded-full" />
              <Number size={3} number={5} />
              <Number size={3} number={6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
