import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  function youtubeAction() {
    window.location.href = "https://www.youtube.com/@sumontasaha5638";
  }
  function FacebookAction() {
    window.location.href = "https://www.facebook.com/sumonta.mridul/";
  }
  function instagramAction() {
    window.location.href = "https://www.instagram.com/_sumonta_saha_/";
  }
  function linkedinAction() {
    window.location.href = "https://www.linkedin.com/in/sumonta-saha-mridul-b35bb61a0/";
  }
  function githubAction() {
    window.location.href = "https://github.com/Sumonta056";
  }
  function WebsiteAction() {
    window.location.href = "https://mri-shot.vercel.app/";
  }
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 flex flex-col gap-2 text-gray-300">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="pb-4">
          React Simplify Template: Your go-to for streamlining React setups with
          library integration and Tailwind CSS.
        </p>
      </div>

      <div className="flex justify-center gap-16">
        <FaFacebookSquare
          size={30}
          className="hover:text-sky-700"
          onClick={FacebookAction}
        />
        <FaInstagram
          size={30}
          className="hover:text-red-700"
          onClick={instagramAction}
        />
        <FaLinkedin
          size={30}
          className="hover:text-cyan-700"
          onClick={linkedinAction}
        />
        <FaGithubSquare
          size={30}
          className="hover:text-zinc-700"
          onClick={githubAction}
        />
        <FaDribbbleSquare
          size={30}
          className="hover:text-lime-700"
          onClick={WebsiteAction}
        />
        <FaYoutube
          size={30}
          className="hover:text-red-700"
          onClick={youtubeAction}
        />
      </div>
    </div>
  );
};

export default Footer;
