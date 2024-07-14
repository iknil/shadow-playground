export const insertScript = (src) => {
  const script = document.createElement('script');
  script.src = src;
  document.body.appendChild(script);
}

export const insertStyle = (href) => {
  const link = document.createElement('link');
  link.rel ='stylesheet';
  link.href = href;
  document.head.appendChild(link);
}