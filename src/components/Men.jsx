import { Box, Grid, GridItem, Image, Stack,Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Men = () => {
  const [menData, setMenData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let r = await fetch(
        "https://www2.hm.com/en_in/men/shop-by-product/tshirts-tank-tops/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=72&page-size=36"
      );

      let d = await r.json();
      console.log(d.products);

      setMenData(d.products);
    };

    fetchData();
  }, []);

  return (
    <div className="Grid">
      <Grid templateColumns="repeat(5, 1fr)" templateRows="auto" gap={6}>
        {menData.map((d) => (
          <GridItem key={d.articleCode}>
            <Box boxSize="s">
              <Image src={d.image[0].src} />
              <Stack spacing={3}>
                <Text fontSize="2xl"> {d.title}</Text>
              </Stack>
              <Stack spacing={3}>
                <Text fontSize="1xl"> {d.price}</Text>
              </Stack>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default Men;
