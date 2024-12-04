import Image from 'next/image';

export default function Infografis() {
  return (
    <div className="container-infografis">
      <h1>Infografis</h1>
      <Image
        src="/images/infographic.png"
        alt="Infografis dampak buruk media sosial"
        width={768}
        height={1086}
      />
      <p>
        Infografis di atas menggambarkan dampak negatif media sosial terhadap kesehatan mental serta cara-cara untuk mengatasinya.
      </p>
    </div>
  );
}
