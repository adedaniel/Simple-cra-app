import React from "react";
// @ts-ignore
import { Helmet } from "react-helmet";

export default function TawkToScript() {
  return (
    <Helmet>
      <script
        dangerouslySetInnerHTML={{
          __html: `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/61433f21d326717cb681cc2f/1ffnat6q5';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })();
      `,
        }}
      ></script>
    </Helmet>
  );
}
