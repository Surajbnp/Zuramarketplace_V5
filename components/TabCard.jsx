import React from "react";
import styles from "../styles/TabCard.module.css";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

const TabCard = () => {
  const router = useRouter();

  const handleNavigate = (e) => {
    if (e.collectionName === "Hippie Alien Cosmic CLub") {
      router.push("/buy");
    }else{
      return alert("Sorry😐, No collection found!")
    }
  };

  let cardData = [
    {
      image: "https://imgur.com/KbSB528.png",
      collectionName: "Hippie Alien Cosmic CLub",
    },
    {
      image: "https://imgur.com/Prfnh4J.png",
      collectionName: "Zurian NFT's",
    },
    {
      image: "https://imgur.com/mbzPYaS.png",
      collectionName: "Zura Land NFT",
    },
  ];

  return (
    <>
      {cardData &&
        cardData.map((e, index) => {
          return (
            <Box
              onClick={() => handleNavigate(e)}
              key={index}
              className={styles.cardContainer}
            >
              <Box className={styles.imgDiv}>
                <Image width={600} height={600} src={e.image} alt="" />
              </Box>
              <Box mt={2} pl={2}>
                <Text fontSize={"20px"}>{e.collectionName}</Text>
                <Text color={"grey"}>Zuraverse</Text>
              </Box>
            </Box>
          );
        })}
    </>
  );
};

export default TabCard;
