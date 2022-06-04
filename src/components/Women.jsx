import { Box, Button, Grid, GridItem, Image, Stack,Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Women = () => {
  const [womenData, setWomenData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let r = await fetch(
        "https://www2.hm.com/en_in/women/new-arrivals/clothes/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=36&page-size=36"
      );

      let d = await r.json();
      console.log(d.products);

      setWomenData(d.products);
    };

    fetchData();
  }, []);

  return (
    <div className="Grid">
      <Grid templateColumns="repeat(5, 1fr)" templateRows="auto" gap={6}>
        {womenData.map((d) => (
          <GridItem key={d.articleCode}>
            <Box boxSize="s">
              <Image src={d.image[0].src} />
              <Stack spacing={3}>
                <Text fontSize="2xl"> {d.title}</Text>
              </Stack>
              <Stack spacing={3}>
                <Text fontSize="1xl"> {d.price}</Text>
              </Stack>
              <Stack >
              <Button width='100%'>Add to Cart</Button>
              </Stack>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default Women;
