import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import Form from "./components/form";
import FavColor from "./components/favColor";
import "./adit_style.css";

export default function MyApp() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan/>
      <Form/>
      <FavColor />

    </section>
  )
}