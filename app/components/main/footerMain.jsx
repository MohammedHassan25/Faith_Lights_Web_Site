import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <>
      <div className="flex justify-center items-center flex-col h-80 bg-footerBackground bg-cover bg-center relative">
        <div className="h-80 absolute w-full bg-black opacity-50"></div>
        <div className="z-10">
          <h1 className="font-black text-neutral-200 text-shadow-white font-islamic text-center">
            أنوار الإيمان
          </h1>
          <p className="font-black text-neutral-200 text-shadow-white font-islamic text-center pb-7">
            للتواصل:
          </p>
          <div className="flex justify-between items-center border-b-2 pb-5">
            <a
              href="https://x.com/Mohammed2552000"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                className="hover:text-hoverTwitter text-neutral-200 duration-300"
              />
            </a>
            <a
              href="https://www.youtube.com/@mohammedhassan4170"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                size="2x"
                className="hover:text-hoverYoutube text-neutral-200 duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammedhassanmahmoud/"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="hover:text-hoverLinked text-neutral-200 duration-300"
              />
            </a>
            <a
              href="https://web.facebook.com/MohammedHassanMahmoud/"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="hover:text-hoverFace text-neutral-200 duration-300"
              />
            </a>
          </div>
          <p className="font-black text-neutral-200 text-shadow-white font-islamic text-center pt-7">
            جميع الحقوق محفوظة {date} &copy;
          </p>
        </div>
      </div>
    </>
  );
}
