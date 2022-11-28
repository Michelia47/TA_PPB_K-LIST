import "./index.css";
import swal from 'sweetalert';

export default function CardSmall1({ title, about, tahun, quotes, img, dramaa }) {
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
          <button id="btnn3" onClick={() => swal("Quotes Drama " + title , "" + quotes)}>Detail Quotes</button>
        </div>
      </div>
    </div>
  );
}
