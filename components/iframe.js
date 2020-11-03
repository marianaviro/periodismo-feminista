export default function Iframe({ src, title, width, height }) {
  return (
    <iframe
      src={src}
      style={{ border: 0 }}
      className="viz"
      title={title}
      width={width || '100%'}
      height={height || 500}
    ></iframe>
  );
}
