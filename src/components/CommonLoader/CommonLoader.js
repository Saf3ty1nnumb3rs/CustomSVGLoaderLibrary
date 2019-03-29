import React from 'react';

const CommonLoader = () => {
  return (
    <svg version="1.1" id="L6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
        <text x="30" y="50" fontSize="16px"fill="#228B22">Loading</text>
        <circle cx="90" cy="50" stroke="#228B22" strokeWidth="1" fill="#228B22" r="1">
            <animate
              attributeName="r"
              begin="0s; circ1b.end"
              dur="0.4s"
              id="circ1a"
              from="1"
              to="0.5"
            />
            <animate
              attributeName="r"
              begin="circ1a.end"
              dur="0.4s"
              id="circ1b"
              from="0.5"
              to="1"
            />
        </circle>
        <circle cx="94" cy="50" stroke="#228B22" strokeWidth="1" fill="#228B22" r="1">
          <animate
            attributeName="r"
            begin="0.1s; circ2b.end"
            dur="0.4s"
            id="circ2a"
            from="1"
            to="0.5"
          />
          <animate
            attributeName="r"
            begin="circ2a.end"
            dur="0.4s"
            id="circ2b"
            from="0.5"
            to="1"
          />
        </circle>
        <circle cx="98" cy="50" stroke="#228B22" strokeWidth="1" fill="#228B22" r="1">
        <animate
          attributeName="r"
          begin="0.2s; circ3b.end"
          dur="0.4s"
          id="circ3a"
          from="1"
          to="0.5"
        />
        <animate
          attributeName="r"
          begin="circ3a.end"
          dur="0.4s"
          id="circ3b"
          from="0.5"
          to="1"
        />
        </circle>
    </svg>
  );
};

export default CommonLoader;