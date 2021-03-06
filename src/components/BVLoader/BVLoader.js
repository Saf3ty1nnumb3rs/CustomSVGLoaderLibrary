import React from 'react';
import './BVLoader.scss';


const BVLoader = () => {
  return (
      <svg version="1.1" id="L6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 150 150" enableBackground="new 0 0 100 100" xmlSpace="preserve">
        <rect className="horizontal1" x="50" y="51" fill="#0a61ad" width="50" height="5">
          <animate
            attributeName="width"
            dur="0.1s"
            attributeType="XML"
            from="0" 
            to="22"
            id="rectLineTopPre" 
            fill="freeze"
            begin="0s"
          />
          <animate
            attributeName="width"
            dur="0.2s"
            attributeType="XML"
            from="22" 
            to="58"
            id="rectLineTop" 
            fill="freeze"
            begin="rectLineTopPre.end; rectBoxQuat2.end"
          />
          <animate
            attributeName="width"
            dur="0.1s"
            attributeType="XML"
            from="58" 
            to="48"
            id="rectLineTop1" 
            fill="freeze"
            begin="rectLineTop.end"
          />
          <animate
            attributeName="width"
            dur="0.3s"
            attributeType="XML"
            from="48" 
            to="0"
            id="rectLineTop2" 
            fill="freeze"
            begin="rectLineTop1.end + 0.5s"
          />
          <animate
            attributeName="y"
            dur="0.1s"
            attributeType="XML"
            from="51" 
            to="78"
            id="rectLineTop3" 
            fill="freeze"
            begin="rectLineTop2.end"
          />
          <animate
            attributeName="width"
            dur="0.2s"
            attributeType="XML"
            from="0" 
            to="22"
            id="rectLineTop4" 
            fill="freeze"
            begin="newRect.end + 0.4s"
          />
          <animate
            attributeName="y"
            dur="0.3s"
            attributeType="XML"
            from="78" 
            to="51"
            id="rectLineTop5" 
            fill="freeze"
            begin="rectBoxLeftc.end"
          />
        </rect>
        <rect className="horizontal2" x="50" y="63" fill="#0a61ad" width="0" height="5">
          <animate
            attributeName="width"
            dur="0.2s"
            attributeType="XML"
            from="0" 
            to="22"
            id="rectLine2" 
            fill="freeze"
            begin="rectLineTopPre.end + 0.1s"
          />
          <animate
            attributeName="width"
            dur="0.3s"
            attributeType="XML"
            from="22" 
            to="0"
            id="rectLine2b" 
            fill="freeze"
            begin="rectLineTop2.begin + 0.2s"
          />
          <animate
            attributeName="y"
            dur="0.1s"
            attributeType="XML"
            from="63" 
            to="90"
            id="rectLine2c" 
            fill="freeze"
            begin="rectLine2b.end"
          />
          <animate
            attributeName="width"
            dur="0.2s"
            attributeType="XML"
            from="0" 
            to="22"
            id="rectLine2d" 
            fill="freeze"
            begin="rectLineTop4.begin"
          />
          <animate
            attributeName="y"
            dur="0.3s"
            attributeType="XML"
            from="90" 
            to="63"
            id="rectLine2e" 
            fill="freeze"
            begin="rectLineTop5.begin"
          />
        </rect>
        <rect className="outlinedPrimary" x="50" y="74" stroke="#0a61ad" strokeWidth="2" fill="#fff" width="20" height="20">
          <animate
            attributeName="y"
            dur="0.3s"
            attributeType="XML"
            from="73" 
            to="46"
            id="rectBoxLeft" 
            fill="freeze"
            begin="rectLine2b.end"
          />
          <animate
            attributeName="y"
            dur="0.1s"
            attributeType="XML"
            from="46" 
            to="50"
            id="rectBoxLeftb" 
            fill="freeze"
            begin="rectBoxLeft.end"
          />
          <animate
            attributeName="height"
            dur="0.3s"
            attributeType="XML"
            from="20" 
            to="0"
            id="rectBoxLeftc" 
            fill="freeze"
            begin="rectBoxLeft2e.end +0.1s"
          />
          <animate
            attributeName="y"
            dur="0.1s"
            attributeType="XML"
            from="50" 
            to="74"
            id="rectBoxLeftd" 
            fill="freeze"
            begin="rectLineTop5.begin"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            dur="0.001s"
            from="0" 
            to="20"
            id="rectBoxLefte" 
            fill="freeze"
            begin="rectBoxSingleServing.end +0.4s"
          />
        </rect>
        <rect className="outlinedQuaternary" x="76" y="50" stroke="#0a61ad" strokeWidth="2" fill="#fff" width="20" height="0">
          <animate
            attributeName="height"
            dur="0.001s"
            attributeType="XML"
            from="0" 
            to="20"
            id="rectBoxQuat" 
            fill="freeze"
            begin="rectLineTop5.begin"
          />
          <animate
            attributeName="height"
            dur="00.3s"
            attributeType="XML"
            from="20" 
            to="0"
            id="rectBoxQuat2" 
            fill="freeze"
            begin="rectBoxQuat.end +0.6s"
          />
        </rect>
        <g transform="scale(1,-1) translate(0,-100)">
          <rect className="outlinedSecondary" x="50" y="6" stroke="#0a61ad" strokeWidth="2" fill="#fff" width="20" height="0">
            <animate
              attributeName="height"
              dur="0.2s"
              attributeType="XML"
              from="0" 
              to="20"
              id="rectBoxLeft2" 
              fill="freeze"
              begin="rectLine2b.end + 0.1s"
              />
            <animate
              attributeName="y"
              dur="0.05s"
              attributeType="XML"
              from="6" 
              to="9"
              id="rectBoxLeft2b" 
              fill="freeze"
              begin="rectBoxLeft2.end"
            />
            <animate
              attributeName="y"
              dur="0.05s"
              attributeType="XML"
              from="9" 
              to="6"
              id="rectBoxLeft2b2" 
              fill="freeze"
              begin="rectBoxLeft2b.end"
            />
            <animate
              attributeName="x"
              dur="0.3s"
              attributeType="XML"
              from="50" 
              to="76"
              id="rectBoxLeft2c" 
              fill="freeze"
              begin="newRect.end + 0.3s"
            />
            <animate
              attributeName="y"
              dur="0.3s"
              attributeType="XML"
              from="6" 
              to="34"
              id="rectBoxLeft2d" 
              fill="freeze"
              begin="newRect4.end"
            />
            <animate
              attributeName="y"
              dur="0.2s"
              attributeType="XML"
              from="34" 
              to="30"
              id="rectBoxLeft2e" 
              fill="freeze"
              begin="rectBoxLeft2d.end"
            />
            <animate
              attributeName="height"
              attributeType="XML"
              dur="0.01s"
              from="20" 
              to="0"
              id="rectBoxLeft2f" 
              fill="freeze"
              begin="rectBoxSingleServing3.end"
            />
            <animate
              attributeName="stroke"
              attributeType="XML"
              dur="0.01s" 
              to="transparent"
              id="rectBoxLeft2f-stroke" 
              fill="freeze"
              begin="rectBoxSingleServing3.end"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              dur="0.1s"
              from="30" 
              to="6"
              id="rectBoxLeft2g" 
              fill="freeze"
              begin="rectBoxLeft2f.end"
            />
            <animate
              attributeName="x"
              dur="0.1s"
              attributeType="XML"
              from="76" 
              to="50"
              id="rectBoxLeft2h" 
              fill="freeze"
              begin="rectBoxLeft2g.end"
            />
            <animate
              attributeName="stroke"
              attributeType="XML"
              dur="0.01s" 
              to="#0a61ad"
              id="rectBoxLeft2h-stroke" 
              fill="freeze"
              begin="rectBoxLeft2h.end"
            />
          </rect>
          <rect className="outlinedTertiary" x="50" y="6" stroke="#0a61ad" strokeWidth="2" fill="#fff" width="20" height="0">
            <animate
              attributeName="height"
              dur="0.2s"
              attributeType="XML"
              from="0" 
              to="20"
              id="rectBoxSingleServing" 
              fill="freeze"
              begin="rectBoxLeftd.end +0.2s"
            />
            <animate
              attributeName="y"
              dur="0.1s"
              attributeType="XML"
              from="6" 
              to="10"
              id="rectBoxSingleServing3" 
              fill="freeze"
              begin="rectBoxSingleServing.end"
            />
            <animate
              attributeName="y"
              dur="0.1s"
              attributeType="XML"
              from="10" 
              to="6"
              id="rectBoxSingleServing4" 
              fill="freeze"
              begin="rectBoxSingleServing3.end"
            />
            <animate
              attributeName="height"
              dur="0.001s"
              attributeType="XML"
              from="20" 
              to="0"
              id="rectBoxSingleServing2" 
              fill="freeze"
              begin="rectBoxLefte.end +0.2s"
            />
          </rect>
          <rect className="solidPrimary" x="76" y="6" stroke="#0a61ad" strokeWidth="1" fill="#0a61ad" width="20" height="0">
            <animate
              attributeName="height"
              dur="0.4s"
              attributeType="XML"
              from="0" 
              to="36"
              id="rectBox" 
              fill="freeze"
              begin="rectLine2.end"
            />
            <animate
              attributeName="height"
              dur="0.1s"
              attributeType="XML"
              from="36" 
              to="34"
              id="rectBox1" 
              fill="freeze"
              begin="rectBox.end"
            />
            <animate
              attributeName="height"
              dur="0.1s"
              attributeType="XML"
              from="34" 
              to="50"
              id="rectBox2" 
              fill="freeze"
              begin="rectLine2b.end + 0.1s; rectBox6"
            />
            <animate
              attributeName="height"
              dur="0.1s"
              attributeType="XML"
              from="50" 
              to="45"
              id="rectBox3" 
              fill="freeze"
              begin="rectBox2.end"
            />
            <animate
              attributeName="height"
              dur="0.001s"
              attributeType="XML"
              from="46" 
              to="0"
              id="rectBox4" 
              fill="freeze"
              begin="rectBox3.end + 0.25s"
            />
            <animate
              attributeName="height"
              animation-direction="reverse"
              dur="00.3s"
              attributeType="XML"
              from="0" 
              to="20"
              id="rectBox5" 
              fill="freeze"
              begin="rectBoxLeft2d.begin + 0.1s"
            />
            <animate
              attributeName="height"
              dur="00.3s"
              attributeType="XML"
              from="20" 
              to="36"
              id="rectBox6" 
              fill="freeze"
              begin="rectBoxQuat2.begin"
            />
          </rect>
        </g>
        <rect className="solidSecondary" x="76" y="49" stroke="#0a61ad" strokeWidth="1" fill="#0a61ad" width="20" height="0">
          <animate
            attributeName="height"
            dur="0.001s"
            attributeType="XML"
            from="0" 
            to="45"
            id="newRect" 
            fill="freeze"
            begin="rectBox2.end + 0.2s"
          />
          <animate
            attributeName="height"
            dur="0.3s"
            attributeType="XML"
            from="45" 
            to="16"
            id="newRect2" 
            fill="freeze"
            begin="newRect.end + 0.1s"
          />
          <animate
            attributeName="height"
            dur="0.1s"
            attributeType="XML"
            from="16" 
            to="20"
            id="newRect3" 
            fill="freeze"
            begin="newRect2.end"
          />
          <animate
            attributeName="height"
            dur="0.3s"
            attributeType="XML"
            from="20" 
            to="0"
            id="newRect4" 
            fill="freeze"
            begin="rectBoxLeft2c.end"
          />
        </rect>
        <text x="38" y="120" fontSize="16px"fill="#0a61ad">Loading</text>
        <circle cx="97" cy="120" stroke="#0a61ad" strokeWidth="1" fill="#0a61ad" r="1">
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
        <circle cx="101" cy="120" stroke="#0a61ad" strokeWidth="1" fill="#0a61ad" r="1">
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
        <circle cx="105" cy="120" stroke="#0a61ad" strokeWidth="1" fill="#0a61ad" r="1">
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
  )
};

export default BVLoader;