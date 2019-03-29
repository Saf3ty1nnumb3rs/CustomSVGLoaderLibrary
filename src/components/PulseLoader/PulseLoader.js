import React from 'react';

const PulseLoader = () => {
  return (
    <svg version="1.1" id="L6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
        <circle cx="40" cy="50" stroke="#e74c3c" strokeWidth="1" fill="#e74c3c" r="4">
            <animate
              attributeName="r"
              begin="0s; circ1b.end"
              dur=".4s"
              id="circ1a"
              from="4"
              to="2"
            />
            <animate
              attributeName="r"
              begin="circ1a.end"
              dur=".4s"
              id="circ1b"
              from="2"
              to="4"
            />
        </circle>
        <circle cx="50" cy="50" stroke="#e74c3c" strokeWidth="1" fill="#e74c3c" r="4">
          <animate
            attributeName="r"
            begin=".1s; circ2b.end"
            dur=".4s"
            id="circ2a"
            from="4"
            to="2"
          />
          <animate
            attributeName="r"
            begin="circ2a.end"
            dur=".4s"
            id="circ2b"
            from="2"
            to="4"
          />
        </circle>
        <circle cx="60" cy="50" stroke="#e74c3c" strokeWidth="1" fill="#e74c3c" r="4">
        <animate
          attributeName="r"
          begin=".2s; circ3b.end"
          dur=".4s"
          id="circ3a"
          from="4"
          to="2"
        />
        <animate
          attributeName="r"
          begin="circ3a.end"
          dur=".4s"
          id="circ3b"
          from="2"
          to="4"
        />
        </circle>
    </svg>
  );
};

export default PulseLoader;