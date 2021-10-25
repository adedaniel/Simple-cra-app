import React from "react";
// @ts-ignore
import { Helmet } from "react-helmet";

export default function GoogleScript() {
  return (
    <Helmet>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-163859000-1"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-163859000-1');
                    `,
        }}
      ></script>
    </Helmet>
  );
}
