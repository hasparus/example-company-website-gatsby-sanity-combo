declare module '.css';

declare module '*.module.css' {
  // Consider configuring typed-css-modules
  const styles: Record<string, string>;
  export default styles;
}
