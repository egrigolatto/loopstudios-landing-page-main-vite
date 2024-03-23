import instagram from "../assets/images/icon-instagram.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import facebook from "../assets/images/icon-facebook.svg";

function Redes() {
  return (
    <div className="flex items-center justify-center gap-x-3">
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
      <img src={pinterest} alt="pinterest" />
      <img src={instagram} alt="instagram" />
    </div>
  );
}

export default Redes;
