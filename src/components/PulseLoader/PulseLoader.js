import React from 'react';

const PulseLoader = () => {
  return (
    <svg version="1.1" id="L6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
        <circle id="circ1" cx="40" cy="50" stroke="#e55437" strokeWidth="1" fill="#e55437" r="4">
            <animate
              attributeName="r"
              attributeType="XML"
              begin="0s; circ1b.end"
              dur="0.4s"
              id="circ1a"
              from="4"
              to="2"
            />
            <animate
              attributeName="r"
              attributeType="XML"
              begin="circ1a.end"
              dur="0.4s"
              id="circ1b"
              from="2"
              to="4"
            />
        </circle>
        <circle id="circ2" cx="50" cy="50" stroke="#e1cf79" strokeWidth="1" fill="#e1cf79" r="4">
          <animate
            attributeName="r"
            attributeType="XML"
            begin="0.1s; circ2b.end"
            dur="0.4s"
            id="circ2a"
            from="4"
            to="2"
          />
          <animate
            attributeName="r"
            attributeType="XML"
            begin="circ2a.end"
            dur="0.4s"
            id="circ2b"
            from="2"
            to="4"
          />
        </circle>
        <circle id="circ3" cx="60" cy="50" stroke="#3097bf" strokeWidth="1" fill="#3097bf" r="4">
        <animate
          attributeName="r"
          attributeType="XML"
          begin="0.2s; circ3b.end"
          dur="0.4s"
          id="circ3a"
          from="4"
          to="2"
        />
        <animate
          attributeName="r"
          attributeType="XML"
          begin="circ3a.end"
          dur="0.4s"
          id="circ3b"
          from="2"
          to="4"
        />
        </circle>
    </svg>
  );
};

export default PulseLoader;