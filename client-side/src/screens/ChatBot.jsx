import React, { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    window.__be = window.__be || {};
    window.__be.id = "646cb1d5c9a42100073aae3a";
    (function() {
      var be = document.createElement('script');
      be.type = 'text/javascript';
      be.async = true;
      be.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(be, s);
    })();

    return () => {
      var scripts = document.getElementsByTagName('script');
      for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src.includes('cdn.chatbot.com/widget/plugin.js')) {
          scripts[i].parentNode.removeChild(scripts[i]);
          break;
        }
      }
    };
  }, []);

  return null;
};

export default ChatBot;





