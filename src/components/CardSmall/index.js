import "./index.css";

export default function CardSmall({ title, about, tahun, quotes, img, dramaa }) {
  return (
    <div className="card">
      <img src={img} alt="" className="photo" />
      <div className="description">
        <div>
          <p id="title">{title}</p>
          <p id="tahun">{tahun}</p>
          <p id="quotes">{quotes}</p>
          <p id="about">{about}</p>
          <p id="dramaa">{dramaa}</p>
        </div>
      </div>
    </div>
  );
}
