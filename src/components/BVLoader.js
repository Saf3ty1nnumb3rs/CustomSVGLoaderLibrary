import React from 'react';
import './BVLoader.scss';


const BVLoader = () => {
  return (
      <svg version="1.1" id="L6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 150 150" enable-background="new 0 0 100 100" xmlSpace="preserve">
        <rect fill="none" stroke="#000" stroke-width="4" x="37.5" y="37.5" width="75" height="75">
          {/* <animateTransform
            attributeName="transform"
            dur="0.8s"
            from="0 75 75"
            to="180 75 75"
            type="rotate"
            id="strokeBox"
            attributeType="XML"
            begin="rectBox.end"
            /> */}
        </rect>
        <rect x="50" y="54" fill="#321" width="50" height="5">
          <animate
            attributeName="width"
            dur="1.3s"
            attributeType="XML"
            from="0" 
            to="58"
            id="rectLineTop" 
            fill="freeze"
            begin="0s"
          />
          <animate
            attributeName="width"
            dur=".3s"
            attributeType="XML"
            from="58" 
            to="48"
            id="rectLineTop1" 
            fill="freeze"
            begin="rectLineTop.end"
          />
          <animate
            attributeName="width"
            dur=".5s"
            attributeType="XML"
            from="48" 
            to="0"
            id="rectLineTop2" 
            fill="freeze"
            begin="rectBox1.end + .1s"
          />
        </rect>
        <rect x="50" y="64" fill="#321" width="0" height="5">
          <animate
            attributeName="width"
            dur=".3s"
            attributeType="XML"
            from="0" 
            to="20"
            id="rectLine2" 
            fill="freeze"
            begin="rectLineTop.end"
          />
          <animate
            attributeName="width"
            dur=".4s"
            attributeType="XML"
            from="20" 
            to="0"
            id="rectLine2b" 
            fill="freeze"
            begin="rectBox1.end + .4s"
          />
        </rect>
        <rect x="50" y="74" stroke="#000" stroke-width="3" fill="#fff" width="20" height="20">
          <animate
            attributeName="y"
            dur=".5s"
            attributeType="XML"
            from="73" 
            to="46"
            id="rectBoxLeft" 
            fill="freeze"
            begin="rectLine2b.end"
          />
          <animate
            attributeName="y"
            dur=".5s"
            attributeType="XML"
            from="46" 
            to="50"
            id="rectBoxLeftb" 
            fill="freeze"
            begin="rectBoxLeft.end"
          />
        </rect>
        <g transform="scale(1,-1) translate(0,-100)">
          <rect x="50" y="6" stroke="#000" stroke-width="3" fill="#fff" width="20" height="0">
            <animate
              attributeName="height"
              dur=".4s"
              attributeType="XML"
              from="0" 
              to="24"
              id="rectBoxLeftb" 
              fill="freeze"
              begin="rectLine2b.end +.1s"
              />
            <animate
              attributeName="height"
              dur=".4s"
              attributeType="XML"
              from="24" 
              to="20"
              id="rectBoxLeftb" 
              fill="freeze"
              begin="rectBoxLeft.end"
            />
          </rect>
          <rect x="76" y="5" fill="#fff" width="20" height="0">
            <animate
              attributeName="height"
              dur=".8s"
              attributeType="XML"
              from="0" 
              to="34"
              id="rectBox" 
              fill="freeze"
              begin="rectLine2.end"
            />
            <animate
              attributeName="height"
              dur=".2s"
              attributeType="XML"
              from="34" 
              to="32"
              id="rectBox1" 
              fill="freeze"
              begin="rectBox.end"
            />
            <animate
              attributeName="height"
              dur=".3s"
              attributeType="XML"
              from="32" 
              to="48"
              id="rectBox2" 
              fill="freeze"
              begin="rectLine2b.end + .2s"
            />
            <animate
              attributeName="height"
              dur=".2s"
              attributeType="XML"
              from="48" 
              to="46"
              id="rectBox3" 
              fill="freeze"
              begin="rectBox2.end"
            />
          </rect>
        </g>
        
      </svg>
  )
};

export default BVLoader;