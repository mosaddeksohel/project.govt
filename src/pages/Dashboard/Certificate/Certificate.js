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
        <Grid item xs={4} sm={4} md={4}>
          <Item>
            <div>
              <img
                src={img1}
                style={{ height: "120px", width: "120px", padding: "10px" }}
                alt=""
                srcset=""
              />
              <h4>পুনরায় বিবাহের সনদ</h4>
            </div>
          </Item>
          <Item>
            <div>
              <img
                src={img2}
                alt=""
                style={{ height: "120px", width: "120px", padding: "10px" }}
                srcset=""
              />
              <h4>এতিম সনদ</h4>
            </div>
          </Item>
          <Item>
            <img
              src={img3}
              style={{ height: "120px", width: "120px", padding: "10px" }}
              alt=""
              srcset=""
            />
            <h4>চারিত্রিক সনদ</h4>
          </Item>
          <Item>
            <img
              src={img4}
              alt=""
              style={{ height: "120px", width: "120px", padding: "10px" }}
              srcset=""
            />
            <h4>মৃত্যু সনদ</h4>
          </Item>

          <Item>
            <img
              src={img5}
              alt=""
              style={{ height: "120px", width: "120px", padding: "10px" }}
              srcset=""
            />
            <h4>মাসিক আয় সনদ</h4>
          </Item>
          <Item>
            <img
              src={img6}
              alt=""
              style={{ height: "120px", width: "120px", padding: "10px" }}
              srcset=""
            />
            <h4>মুক্তিযোদ্ধা সনদ</h4>
          </Item>
          <Item>
            <img
              src={img7}
              alt=""
              style={{ height: "120px", width: "120px", padding: "10px" }}
              srcset=""
            />
            <h4>বাৎসরিক আয় সনদ</h4>
          </Item>
          <Item>
            <img
              src={img8}
              alt=""
              style={{ height: "120px", width: "120px", padding: "10px" }}
              srcset=""
            />
            <h4>বৈবাহিক সনদ</h4>
          </Item>
          <Item>
            <img
              src={img9}
              alt=""
              style={{ height: "120px", width: "120px", padding: "10px" }}
              srcset=""
            />
            <h4>অবিবাহিত সনদ</h4>
          </Item>
          <Item>
            <img
              src={img10}
              alt=""
              style={{ height: "120px", width: "120px", padding: "10px" }}
              srcset=""
            />
          </Item>
          <Item>
            <img
              src={img11}
              alt=""
              style={{ height: "120px", width: "120px", padding: "10px" }}
              srcset=""
            />
          </Item>
          <Item>
            <img
              src={img12}
              alt=""
              style={{ height: "120px", width: "120px", padding: "10px" }}
              srcset=""
            />
          </Item>
          <Item>
            <img
              src={img13}
              alt=""
              style={{ height: "120px", width: "120px", padding: "10px" }}
              srcset=""
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Certificate;
