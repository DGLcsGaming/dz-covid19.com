import React from "react";
import Area from "./Area";

const Wilayas = React.forwardRef((props, ref) => (
  <div className="areas" ref={ref}>
    {props.wilayas
      .sort((a, b) => b.confirmed - a.confirmed)
      .map((wilaya) => (
        <Area key={wilaya.code} data={wilaya} />
      ))}
  </div>
));
/* export default React.memo(Wilayas, (p, n) => {
  return JSON.stringify(p) === JSON.stringify(n);
}); */
export default Wilayas;
