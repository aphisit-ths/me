import React from "react";
import "./intro.scss";
function IntroPage() {
  const me = "https://scontent.fbkk9-3.fna.fbcdn.net/v/t39.30808-6/275371442_4953293474747403_2344795398102508870_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGxSVFTTxZwXDwAE8luuOvjxmxfAD9ozNTGbF8AP2jM1Lc2tcBhy7paapNJfzvCOXt8NJFPNq64ET0sk7vpBE_2&_nc_ohc=gwgu2EPe1LUAX9da0u0&_nc_zt=23&_nc_ht=scontent.fbkk9-3.fna&oh=00_AT96FQ5zRXnYZ8XTytZxRsPR5hSgM_vquJHbDlE-tlWCOg&oe=622FF7B6";
  return (
    <div className="intro" >
      <div className="image-section">
        <img src={me} alt="my img" />
      </div>
      <div className="info-section">
        <h1>OATH</h1>
        <h2>APHISIT TUBSAENG</h2>
        </div>
    </div>
  );
}

export default IntroPage;
