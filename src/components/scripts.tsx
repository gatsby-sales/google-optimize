import React from "react";

export default function Scripts() {
  return (
    <>
      {" "}
      <script
        src={`https://www.googletagmanager.com/gtag/js?id=G-0M4VLT4RRY`}
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || []
          window.gtag = function gtag() { window.dataLayer.push(arguments) }
          gtag('js', new Date())
          gtag('config', G-0M4VLT4RRY, { page_path: location ? location.pathname + location.search + location.hash : undefined })
        `}
      </script>
      <script>{`(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
{'CONTAINER_ID':true});`}</script>
      <script src="https://www.googleoptimize.com/optimize.js?id=OPT-PBML2V3"></script>
    </>
  );
}
