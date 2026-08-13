import './Marquee.css';

export default function Marquee({ items = [], separator = '✦', speed = 30, reverse = false }) {
  const track = [...items, ...items, ...items];

  return (
    <div className="marquee">
      <div
        className={`marquee__track ${reverse ? 'marquee__track--reverse' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {track.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item} <span className="marquee__sep">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
