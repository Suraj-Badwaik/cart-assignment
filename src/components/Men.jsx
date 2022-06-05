import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Men = () => {
  const [menData, setMenData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let r = await fetch("http://localhost:3030/Men");

      let d = await r.json();
      console.log(d);

      setMenData(d);
    };

    fetchData();
  }, []);

  return (
    <div className="Grid">
      <Grid templateColumns="repeat(5, 1fr)" templateRows="auto" gap={6}>
        {menData.map((d) => (
          <GridItem key={d.articleCode}>
            <Link to={`/Men/${d.articleCode}`}>
              <Box boxSize="s">
                <Image src={d.image} />
                <Stack spacing={3}>
                  <Text fontSize="2xl"> {d.title}</Text>
                </Stack>
                <Stack spacing={3}>
                  <Text fontSize="1xl"> {d.price}</Text>
                </Stack>
                <Stack>
                  <Button width="100%">Add to Cart</Button>
                </Stack>
              </Box>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default Men;
