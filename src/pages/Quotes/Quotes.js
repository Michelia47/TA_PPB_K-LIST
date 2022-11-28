import { Fragment } from "react";
import CardSmall1 from "../../components/CardSmall1";
import "./Quotes.css";

export default function Quotes() {

  const data = [
    {
      title: "The Law Cafe",
      id: 1,
      quotes: '"Kita memendam semuanya, berpikir akan ada kesempatan untuk mengatakannya nanti. Namun, hidup tidak menunggu siapa pun."',
      tahun: "2022",
      img: "https://i.mydramalist.com/x33By_4f.jpg",
    },
    {
      title: "Little Women",
      id: 2,
      quotes: '"Jangan pernah terintimidasi, apa pun itu, hidupmu jauh lebih penting."',
      tahun: "2022",
      img: "https://i.mydramalist.com/R6Nkr_4f.jpg",
    },
    {
      title: "Extraordinary Attorney Woo",
      id: 3,
      quotes: '"Meski hanya dengan menatap awan dan menertawakannya, selama mereka tersenyum dan bahagia, itulah yang dinamakan bermain."',
      tahun: "2022",
      img: "https://i.mydramalist.com/dgJJz_4f.jpg",
    },
    {
      title: "Today's Webtoon",
      id: 4,
      quotes: '"Pengalaman bisa dibagi. Keterampilan bisa diajarkan. Tapi, tidak semua orang memiliki tekad."',
      tahun: "2022",
      img: "https://i.mydramalist.com/66Zr2_4f.jpg",
    },
    {
      title: "Twenty-Five Twenty-One",
      id: 5,
      quotes: '"Zaman telah merenggut segalanya darimu, tetapi jangan menyerah atas kebahagiaanmu."',
      tahun: "2022",
      img: "https://i.mydramalist.com/ROOPo_4f.jpg",
    },
    {
      title: "Vincenzo",
      id: 6,
      quotes: '"Orang yang berhasil dalam hal kecil, biasanya dia menjadi pemenang dalam hal besar."',
      tahun: "2021",
      img: "https://i.mydramalist.com/vAnBe_4c.jpg",
    },
    {
      title: "Start Up",
      id: 7,
      quotes: '"Masa kini juga anugerah. Aku tak akan mengisi masa kini dengan penyesalan lagi."',
      tahun: "2020",
      img: "https://i.mydramalist.com/RQLeY_4f.jpg",
    },
    {
      title: "Itaewon Class",
      id: 8,
      quotes: '"Jangan ragu untuk meraih mimpi yang selama ini ingin kamu capai."',
      tahun: "2020",
      img: "https://i.mydramalist.com/kOpKmf.jpg",
    },
    {
      title: "School 2017",
      id: 9,
      quotes: '"Apa yang kita temukan di ujung jalan sana mungkin bukan sesuatu yang mewah, tapi kita sudah melakukan perjalanan yang indah."',
      tahun: "2017",
      img: "https://i.mydramalist.com/qkwj0f.jpg",
    },
    {
      title: "Weightlifting Fairy Kim Bok Joo",
      id: 10,
      quotes: '"Belajarlah berdiri dengan kedua kakimu sendiri."',
      tahun: "2017",
      img: "https://i.mydramalist.com/D2X7Dc.jpg",
    },
  ];

  return (
    <>
      <p id="movies1">10 K-QUOTES</p>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <CardSmall1
            title={item.title}
            img={item.img}
            quotes={item.quotes}
            tahun={item.tahun}
          />
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}
