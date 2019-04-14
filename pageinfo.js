let hostnamee = document.location.hostname;
let hostt = document.location.host;
let hreff = document.location.href;
let portt =  document.location.port;
let protocoll = document.location.protocol;

let firstPaint = chrome.loadTimes().firstPaintTime - chrome.loadTimes().startLoadTime;
console.log(firstPaint);

// JS
    let scriptt = document.querySelectorAll('script');
    let scriptCount = [];
    for (let i = 0; i < scriptt.length; i++) {
        scriptCount.push(scriptt.value);
    }
    // console.log(scriptCount.length);
// JS

// CSS
    let stylee = document.querySelectorAll('style');
    let stylecount = [];
    for (let s = 0; s < stylee.length; s++) {
        stylecount.push(style.value);
    }
    // console.log(stylecount.length);
// CSS

// script

function webinfo() {
    this.Href = hreff;
    this.Host = hostt;
    this.HostName = hostnamee;
    this.Port = portt;
    this.Protocol = protocoll;
    this.FirstPaint = firstPaint;
    this.JS = scriptCount.length;
    this.CSS = stylecount.length;
}
let WebInfo = new webinfo();
console.table(WebInfo);