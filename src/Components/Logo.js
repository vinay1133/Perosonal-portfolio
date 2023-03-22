import bgvideo from "../assets/img/bgvideo.mp4";

export const Logo = () => {
  <video autoPlay>
    <source src={bgvideo} type="video/mp4" />
  </video>;
};
