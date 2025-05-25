import React from 'react';

export function Profile({ src, alt }) {
  return <img src={src} alt={alt} />;
}

export default function Gallery() {
  const profiles = Array(3).fill({
    src: "./imagens/Katerina.png",
    alt: "Katherine Johnson"
  });

  return (
    <section>
      <h1>Amazing scientists</h1>
      {profiles.map((profile, index) => (
        <Profile key={index} src={profile.src} alt={profile.alt} />
      ))}
    </section>
  );
}