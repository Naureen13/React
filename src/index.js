import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/300";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite TV Series
    </h1>
    <img alt="random" src={img + "?grayscale"} />`
    <img
      className="abc"
      src="https://ntvb.tmsimg.com/assets/p10700229_b_h10_aa.jpg?w=1280&h=720"
      alt=""
    />
    <img
      className="abc"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCPK2dF2D830wzzuLPVnQoPx1TRTycSqUw6Nq_0r0YsxZ4utuPy2LLSe7911XVcDXeSI&usqp=CAU"
      alt=""
    />
    <img
      className="abc"
      src="https://occ.a.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ9awAkb-r_d-yhRCDCtVaahihZ2QxxNtiobvrxDsHE6Jq7KzsLE5eBTJSeM1hU2zxzN_iQWMYpgPnOdLV5H5_5N2ubJvVIMYlE8F-Jn22pRAj_IPv1WNEadBKFqBN9UDe4nCg.jpg?r=c68"
      alt=""
    />
  </div>,
  document.getElementById("root")
);
