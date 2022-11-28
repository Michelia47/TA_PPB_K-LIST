import { Fragment } from "react";
import CardSmall from "../../components/CardSmall";
import "./About.css";

export default function About() {

  const data = [
    {
      id : 1,
      title: "K-LIST ",
      about: "K-LIST merupakan singkatan dari K-DRAMA dan K-QUOTES LIST.",
      img : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSaPvN5qhTDriS5On0jMEW-jBuzzIBsV8GL1Sb2g0OvTnSBvydo4Z8LEcYmfX6o4FEyhOEiaMppVPhwOHaOIC38az2-1Fx1XMZ1HrHPHE3O6ERaYD2WkCZ8I5H3nEWmTUpLgzrDp_y0sjlenaNitIdEo8JP7wlkXvTfTArPWvvP1Cr8_eGj96vzJIEQw/s320/512.png",
    },
    {
      id : 2,
      title: "CONTENT ",
      about: "K-LIST merupakan aplikasi yang menyediakan informasi mengenai list drama korea dan list quotes dari beberapa drama korea.",
      img : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWtqspqkthyMrCZHsxRDrHQ06iUERRjvPU-OfEUXTHl7DeUBpVMMpzWjaCuTI_DQxU8rPt5kKbcfyqrmGV_CavA4Jr229jkmIKNTJv7O2taaBnEksCivVe8FiZ-IU8uedoodt8dY5ATfZvQnf4rrB0cnqiUPdaAlUd-eBbmkw9crlSWJjhwiLIiXnvaQ/s320/ten.png",
    },
    {
      id : 3,
      title: "DEVELOPER ",
      about: "Michelia Vadilla Verdianto.",
      img : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzK1lSq15W-jAqdyBkctYC-uJcs4r9-Jsog1LZAZeqeYnV-FO6jQKxqxHygH_C2kHgOJwBfENl4q3G2R-l2WLfUfyEj6LvPo-bhUD5MrEi6AG7z0Rbvr0hi1mkIl1Nyd-dLT8GfF23I8hrVAuvHeZxKcNKuRBv7aKBxZ4n5Oa36rG5rRtP_jjhedLjtQ/s320/dev.png",
    },
  ];

  return (
    <>
      <p id="movies">ABOUT APPLICATION</p>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <CardSmall
            title={item.title}
            about={item.about}
            img={item.img}
          />
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}
