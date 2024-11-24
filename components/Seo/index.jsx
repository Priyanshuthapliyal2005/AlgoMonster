import { NextSeo } from "next-seo";
import { useSelector } from "react-redux";
import Data from "@/public/data/algorithmData.json";

export default function Seo({ category, id }) {
  let algoName = useSelector((state) => state.page.algoName);
  if (algoName) {
    let currAlgo = algoName.replace(" ", "");
    let currAlgoData = Data[currAlgo];
    if (currAlgoData) {
      return (
        <>
          <NextSeo
            title={currAlgoData.metaTitle}
            description={currAlgoData.description}
            canonical={`https://AlgoMonster.vercel.app/${category}/${id}`}
            openGraph={{
              url: `https://AlgoMonster.vercel.app/${category}/${id}`,
              title: currAlgoData.metaTitle,
              description: currAlgoData.description,
              profile: {
                firstName: "Sandeep",
                lastName: "Swain",
              },
              images: [
                {
                  url: "https://www.example.ie/og-image-01.jpg",
                  width: 800,
                  height: 600,
                  alt: "Og Image Alt",
                  type: "image/jpeg",
                },
              ],
              siteName: "AlgoMonster",
            }}
            instagram={{
              handle: "@54nd339",
              cardType: "summary_large_image",
            }}
          />
        </>
      );
    }
  }
}