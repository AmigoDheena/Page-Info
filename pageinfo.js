// performance.js
  // https://github.com/bgrins/devtools-snippets
  // Print out window.performance information.
  // https://developer.mozilla.org/en-US/docs/Navigation_timing

  (function () {

    var t = window.performance.timing;
    var lt = window.chrome && window.chrome.loadTimes && window.chrome.loadTimes();
    var timings = [];

    timings.push({
      label: "Time Until Page Loaded",
      time: t.loadEventEnd - t.navigationStart + "ms"
    });
    timings.push({
      label: "Time Until DOMContentLoaded",
      time: t.domContentLoadedEventEnd - t.navigationStart + "ms"
    });
    timings.push({
      label: "Total Response Time",
      time: t.responseEnd - t.requestStart + "ms"
    });
    timings.push({
      label: "Connection",
      time: t.connectEnd - t.connectStart + "ms"
    });
    timings.push({
      label: "Response",
      time: t.responseEnd - t.responseStart + "ms"
    });
    timings.push({
      label: "Domain Lookup",
      time: t.domainLookupEnd - t.domainLookupStart + "ms"
    });
    timings.push({
      label: "Load Event",
      time: t.loadEventEnd - t.loadEventStart + "ms"
    });
    timings.push({
      label: "Unload Event",
      time: t.unloadEventEnd - t.unloadEventStart + "ms"
    });
    timings.push({
      label: "DOMContentLoaded Event",
      time: t.domContentLoadedEventEnd - t.domContentLoadedEventStart + "ms"
    });
    if(lt) {
      if(lt.wasNpnNegotiated) {
        timings.push({
          label: "NPN negotiation protocol",
          time: lt.npnNegotiatedProtocol
        });
      }
      timings.push({
        label: "Connection Info",
        time: lt.connectionInfo
      });
      timings.push({
        label: "First paint after Document load",
        time: Math.ceil(lt.firstPaintTime - lt.finishDocumentLoadTime) + "ms"
      });
    }
    console.table(timings, ["label", "time"]);
  })();
// performance.js

/* Resource info */
  // script
  var scriptsrc = document.querySelectorAll('script');
  var arrscript = [];
  var arrscriptinline = [];
  for(var i=0; i<scriptsrc.length; i++){
    if(scriptsrc[i].src != ''){
        arrscript.push(scriptsrc[i].src);
    }else{
      arrscriptinline.push(scriptsrc[i]);
    }
  }
  console.table(arrscript);
  // script

  // image
  var imagesrc = document.querySelectorAll('img');
  var imgsrc = [];
  for(i = 0; i<imagesrc.length; i++){
    imgsrc.push(imagesrc[i].src);
  }
  console.table(imgsrc);
  // image

  // style
  var teststyle = document.styleSheets;
  var stylesrc = [];
  for(i = 0; i<teststyle.length-1; i++){
    stylesrc.push(teststyle[i].href);
  }
  console.table(stylesrc);
  // style
/* Resource info */

/* Page info */
  let hostnamee = document.location.hostname;
  let hostt = document.location.host;
  let hreff = document.location.href;
  let portt =  document.location.port;
  let protocoll = document.location.protocol;

  let firstPaint = window.chrome.loadTimes().firstPaintTime - window.chrome.loadTimes().startLoadTime;
  
  function webinfo() {
      this.Href = hreff;
      this.Host = hostt;
      this.HostName = hostnamee;
      this.Port = portt;
      this.Protocol = protocoll;
      this.JS = arrscript.length;
      this.InlineJS = arrscriptinline.length;
      this.CSS = stylesrc.length;
      this.Image = imgsrc.length;
  }
  let WebInfo = new webinfo();
  console.table(WebInfo);
/* Page info */
