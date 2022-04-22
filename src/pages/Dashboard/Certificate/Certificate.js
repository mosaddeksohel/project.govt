import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import img1 from "../../../Images/again-married.png";
import img2 from "../../../Images/atim.png";
import img3 from "../../../Images/charrecter.svg";
import img4 from "../../../Images/death.png";
import img6 from "../../../Images/fighter.png";
import img7 from "../../../Images/income.png";
import img8 from "../../../Images/marrid.png";
import img5 from "../../../Images/monthly-income.png";
import img10 from "../../../Images/Nationality.svg";
import img11 from "../../../Images/new votar.svg";
import img12 from "../../../Images/protoyon.svg";
import img13 from "../../../Images/unemployed.png";
import img9 from "../../../Images/unmarried.svg";
import "../../../Images/upojati.png";
import "../../../Images/uttaradhikar.svg";
import "../../../Images/Vumihin.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Certificate = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Item>
            <div>
              <img src={img1} alt="" srcset="" />
              <h4>পুনরায় বিবাহের সনদ</h4>
            </div>
            <img src={img2} alt="" srcset="" />
            <img src={img3} alt="" srcset="" />
            <img src={img4} alt="" srcset="" />
            <img src={img6} alt="" srcset="" />
            <img src={img7} alt="" srcset="" />
            <img src={img5} alt="" srcset="" />
            <img src={img8} alt="" srcset="" />
            <img src={img9} alt="" srcset="" />
            <img src={img10} alt="" srcset="" />
            <img src={img11} alt="" srcset="" />
            <img src={img12} alt="" srcset="" />
            <img src={img13} alt="" srcset="" />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Certificate;
