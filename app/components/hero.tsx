import foto from "../foto.jpg";

export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
        <h1 className="text-gray-300 font-bold">CV ONLINE</h1>
        <h1 className="text-3x1">Aditya Pratama</h1>
        <Profile />
        <p>
          Perkenalkan nama saya Okta Aditya Pratama,Saya adalah Mahasiswa dari Universitas Masoem. Cita-cita saya ingin menjadi Teknisi Profesional,sekaligus pula saya ingin menjadi bos muda diumur yang sangat muda.Tidak Lupa saya juga bercita-cita ingin masuk surga bersama orang-orang yang saya cintai.
        </p>
      </div>
    )
}

function Profile() {
    return <img src={foto.src} alt="Adit Profile" className="fotoku" />;
}