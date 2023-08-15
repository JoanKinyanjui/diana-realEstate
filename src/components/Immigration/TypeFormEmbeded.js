import React, { useEffect } from 'react';

const TypeFormEmbeded = () => {
  useEffect(() => {
    const ifr = document.getElementById("JotFormIFrame-232252194227048");
    if (ifr) {
      let src = ifr.src;
      let iframeParams = [];

      if (window.location.href && window.location.href.indexOf("?") > -1) {
        iframeParams = iframeParams.concat(
          window.location.href.substr(window.location.href.indexOf("?") + 1).split('&')
        );
      }

      if (src && src.indexOf("?") > -1) {
        iframeParams = iframeParams.concat(
          src.substr(src.indexOf("?") + 1).split("&")
        );
        src = src.substr(0, src.indexOf("?"));
      }

      iframeParams.push("isIframeEmbed=1");
      ifr.src = src + "?" + iframeParams.join('&');
    }

    const handleIFrameMessage = (e) => {
      // The rest of the code inside the handleIFrameMessage function
      // ... (Copy and paste the code you provided)
    };

    const isPermitted = (originUrl, whitelisted_domains) => {
      // The rest of the code inside the isPermitted function
      // ... (Copy and paste the code you provided)
    };

    if (window.addEventListener) {
      window.addEventListener("message", handleIFrameMessage, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmessage", handleIFrameMessage);
    }
  }, []);

  return (
      <iframe
        id="JotFormIFrame-232252194227048"
        title="Dingoa Consultancy"
        allowtransparency="true"
        // allowfullscreen="true"
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/232252194227048"
        frameBorder="1"
        style={{ width: '100%', border: 'none',height:"120vh" }}
        scrolling="yes"
      />
  );
};

export default TypeFormEmbeded;

