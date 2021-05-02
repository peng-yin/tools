declare global {
  interface Window {
    ActiveXObject: any;
  }
}

export default ie;
