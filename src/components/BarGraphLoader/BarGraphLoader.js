import React from 'react';

const BarGraphLoader = () => {
  return (
    <svg version="1.1" id="L6" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
        <g transform="scale(1,-1) translate(0,-100)">
          <rect id="solidPrimary" x="10" y="9" stroke="#768591" strokeWidth="0.1" fill="#EAE6DF" width="20" height="3">
            <animate
              xlinkHref="#solidPrimary"
              attributeName="height"
              dur="0.5s"
              attributeType="XML"
              from="3" 
              to="45"
              id="graphA" 
              fill="freeze"
              begin="0s; graphA2.end + 1s"
            />
            <animate
              xlinkHref="#solidPrimary"
              attributeName="height"
              dur="0.2s"
              attributeType="XML"
              from="45" 
              to="30"
              id="graphA1" 
              fill="freeze"
              begin="graphA.end"
            />
            <animate
              xlinkHref="#solidPrimary"
              attributeName="height"
              dur="0.3s"
              attributeType="XML"
              from="30" 
              to="3"
              id="graphA2" 
              fill="freeze"
              begin="graphA1.end + 0.9s"
            />
          </rect>
          <rect id="solidSecondary" x="40" y="9" stroke="#A79B94" strokeWidth="1" fill="#A79B94" width="20" height="3">
            <animate
              xlinkHref="#solidSecondary"
              attributeName="height"
              dur="0.5s"
              attributeType="XML"
              from="3" 
              to="65"
              id="graphB" 
              fill="freeze"
              begin="0.3s; graphB2.end + 1.3s"
            />
            <animate
              xlinkHref="#solidSecondary"
              attributeName="height"
              dur="0.2s"
              attributeType="XML"
              from="65" 
              to="50"
              id="graphB1" 
              fill="freeze"
              begin="graphB.end"
            />
            <animate
              xlinkHref="#solidSecondary"
              attributeName="height"
              dur="0.3s"
              attributeType="XML"
              from="50" 
              to="3"
              id="graphB2" 
              fill="freeze"
              begin="graphB1.end + 0.6s"
            />
          </rect>
          <rect id="solidTertiary" x="70" y="9" stroke="#FF5A60" strokeWidth="1" fill="#FF5A60" width="20" height="3">
            <animate
              xlinkHref="#solidTertiary"
              attributeName="height"
              dur="0.5s"
              attributeType="XML"
              from="3" 
              to="85"
              id="graphC" 
              fill="freeze"
              begin="0.6s; graphC2.end + 1.6s"
            />
            <animate
              xlinkHref="#solidTertiary"
              attributeName="height"
              dur="0.2s"
              attributeType="XML"
              from="85" 
              to="70"
              id="graphC1" 
              fill="freeze"
              begin="graphC.end"
            />
            <animate
              xlinkHref="#solidTertiary"
              attributeName="height"
              dur="0.3s"
              attributeType="XML"
              from="70" 
              to="3"
              id="graphC2" 
              fill="freeze"
              begin="graphC1.end + 0.3s"
            />
          </rect>
        </g>
        <rect className="solidPrimary" x="5" y="92" stroke="#689EB8" strokeWidth="1" fill="#689EB8" width="90" height="2"></rect>
    </svg>
  );
};

export default BarGraphLoader;