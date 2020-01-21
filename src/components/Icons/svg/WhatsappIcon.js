import React from "react";

const WhatsappIcon = ({ color, size = "24", onClick = () => {} }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 70 70"
      onClick={onClick}
    >
      <g transform="translate(-1455 -1035)">
        <rect
          width="70"
          height="70"
          rx="35"
          transform="translate(1455 1035)"
          fill={color}
        />
        <g transform="translate(1494.176 1074.45)">
          <g transform="translate(-24.406 -25.55)">
            <path
              d="M124.073,84.864A20.752,20.752,0,0,0,91.346,109.83L88.4,120.557l11.026-2.873a20.857,20.857,0,0,0,9.937,2.515h.01a20.781,20.781,0,0,0,20.793-20.69A20.515,20.515,0,0,0,124.073,84.864Zm-14.7,31.836h-.01a17.316,17.316,0,0,1-8.8-2.4l-.629-.368-6.541,1.71,1.748-6.343-.409-.646A17.257,17.257,0,1,1,126.65,99.5,17.27,17.27,0,0,1,109.373,116.7Zm9.478-12.885c-.519-.258-3.076-1.511-3.545-1.68s-.819-.259-1.168.258-1.338,1.68-1.648,2.028-.609.388-1.129.129a14.137,14.137,0,0,1-4.175-2.565,15.384,15.384,0,0,1-2.886-3.579c-.3-.517-.03-.8.23-1.054s.519-.606.779-.9a3.324,3.324,0,0,0,.519-.865.955.955,0,0,0-.04-.9c-.13-.258-1.168-2.8-1.6-3.838s-.849-.875-1.168-.885l-1-.02a1.911,1.911,0,0,0-1.388.646A5.778,5.778,0,0,0,98.816,94.9a10.052,10.052,0,0,0,2.117,5.349c.26.348,3.665,5.568,8.878,7.8a30,30,0,0,0,2.966,1.094,7.172,7.172,0,0,0,3.276.209c.9-.129,3.076-1.253,3.505-2.456a4.313,4.313,0,0,0,.3-2.456c-.13-.209-.489-.358-1.009-.616Z"
              transform="translate(-88.4 -78.799)"
              fill="#fff"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default WhatsappIcon;