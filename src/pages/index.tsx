import LegacyImage from "@/components/legacy-image";
import Image from "next/image";

export default function Home() {
  const styleContainer = { width: 500, border: "2px solid red" };
  const imagePic = "/images/8200.jpg";
  const widthPx = 3506;
  const heightPx = 2550;
  const aspectRatio = (widthPx) / heightPx;
  const paddingTopPercentage = `${100*1/aspectRatio}%`
  return (
    <>
      <h2>HTML img element - width 100%</h2>
      <div style={styleContainer}>
        <img width="100%" src={imagePic} alt="" />
      </div>
      <h2>next.js Image element legacy &lt; 13 , width 100%</h2>
      <div style={styleContainer}>
        <LegacyImage
          src={imagePic}
          alt="image"
          width={widthPx}
          height={heightPx}
          style={{ width: "100%" }}
        />
      </div>
      <h2>next.js Image element legacy = 13 , width 100%</h2>
      <h2 style={{ color: "red" }}>
        i am not able to get the solution for aspect ratio
      </h2>
      <div
        style={{
          ...styleContainer,
          position: "relative",
          paddingTop:paddingTopPercentage,
        }}
      >
        <Image
          src={imagePic}
          alt=""
          fill={true}
        />
      </div>
    </>
  );
}
