const { Window } = window.__TAURI__.window;
const { Webview } = window.__TAURI__.webview;

const appWindow = Window.getCurrent();

document.addEventListener('DOMContentLoaded', async () => {
  // Create the webview viewport right below your 50px address bar
  const browserView = new Webview(appWindow, 'riping-viewport', {
    url: 'https://github.com',
    x: 0,
    y: 50, 
    width: window.innerWidth,
    height: window.innerHeight - 50
  });

  // Listen for the 'Go' button click to change URLs
  document.getElementById('go').addEventListener('click', () => {
    let targetUrl = document.getElementById('url-input').value;
    
    // Automatically add https:// if you forget to type it
    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
      targetUrl = 'https://' + targetUrl;
    }
    
    browserView.navigate(targetUrl);
  });
});
