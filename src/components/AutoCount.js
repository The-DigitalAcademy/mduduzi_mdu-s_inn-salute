import React from 'react';

function AutoCount({ count, Increment, Decrement }) {


  return (
    <div>
      <div className="flex items-center justify-center text-2xl">
        Quantity
        <div className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3]">
            {count}
          </div>
          <div
            onClick={Increment}
            className="bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-r-md"
          >
            +
          </div> 
          
          <div className="ml-5 shadow-md flex">
          <div
            onClick={Decrement}
            className="bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-l-md"
          >
            -
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutoCount;