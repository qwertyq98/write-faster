import React, { FC } from 'react';


const Victory: FC<{ victory: number }> = ({ victory }) => {
  return (
    <>
      {victory > 0 && (
        <div className="quote-letters-count">
          Побед{victory === 1 ? 'а' : 'ы'}:
          <span className="badge">{victory}   ʕ ᵔᴥᵔ ʔ</span>
        </div>
      )}
    </>
  );
};


export default Victory;