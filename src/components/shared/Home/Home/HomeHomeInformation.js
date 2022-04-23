import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./HomeInformation.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomeInformation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <div>
          <h3>অনলাইন সেবা</h3>
          <div>
            <div>
              <h5>করদাতার তথ্য</h5>
              <h5>কর পরিষোধ </h5>
              <h5>করদাতার তথ্য ‌ ‌</h5>
            </div>
            <div>
              <h5>ট্রেড লাই‌সেন্স যাচাই ‌</h5>
              <h5>সনদ যাচাই</h5>
              <h5>আ‌বেদ‌নের অবস্থা যাচাই</h5>
            </div>
          </div>
        </div>
        <div>
          <form>
            <select class="up-info" id="jela" name="jela" required="">
              <option>জেলা বাছাই করুন</option>
              <option value="1">বরগুনা</option>
              <option value="2">বরিশাল</option>
              <option value="3">ভোলা</option>
              <option value="4">ঝালকাঠি</option>
              <option value="5">পটুয়াখালী </option>
              <option value="6">পিরোজপুর </option>
              <option value="7">বান্দরবান</option>
              <option value="8">ব্রাহ্মণবাড়িয়া</option>
              <option value="9">চাঁদপুর</option>
              <option value="10">চট্টগ্রাম</option>
              <option value="11">কুমিল্লা</option>
              <option value="12">কক্সবাজার </option>
              <option value="13">ফেনী</option>
              <option value="14">খাগড়াছড়ি</option>
              <option value="15">লক্ষ্মীপুর</option>
              <option value="16">নোয়াখালী</option>
              <option value="17">রাঙ্গামাটি</option>
              <option value="18">ঢাকা </option>
              <option value="19">ফরিদপুর </option>
              <option value="20">গাজীপুর </option>
              <option value="21">গোপালগঞ্জ</option>
              <option value="22">জামালপুর </option>
              <option value="23">কিশোরগঞ্জ </option>
              <option value="24">মাদারীপুর </option>
              <option value="25">মানিকগঞ্জ </option>
              <option value="26">মুন্সিগঞ্জ </option>
              <option value="27">ময়মনসিংহ </option>
              <option value="28">নারায়ণগঞ্জ </option>
              <option value="29">নরসিংদী </option>
              <option value="30">নেত্রকোণা </option>
              <option value="31">রাজবাড়ী </option>
              <option value="32">শরীয়তপুর </option>
              <option value="33">শেরপুর </option>
              <option value="34">টাঙ্গাইল </option>
              <option value="35">বাগেরহাট</option>
              <option value="36">চুয়াডাঙ্গা </option>
              <option value="37">যশোর </option>
              <option value="38">ঝিনাইদহ </option>
              <option value="39">খুলনা </option>
              <option value="40">কুষ্টিয়া </option>
              <option value="41">মাগুরা</option>
              <option value="42">মেহেরপুর </option>
              <option value="43">নড়াইল </option>
              <option value="44">সাতক্ষীরা </option>
              <option value="45">বগুড়া </option>
              <option value="46">জয়পুরহাট</option>
              <option value="47">নওগাঁ </option>
              <option value="48">নাটোর </option>
              <option value="49">চাঁপাই নাবাবগঞ্জ </option>
              <option value="50">পাবনা</option>
              <option value="51">রাজশাহী </option>
              <option value="52">সিরাজগঞ্জ</option>
              <option value="53">দিনাজপুর </option>
              <option value="54">গাইবান্ধা </option>
              <option value="55">কুড়িগ্রাম </option>
              <option value="56">লালমনিরহাট </option>
              <option value="57">নীলফামারী</option>
              <option value="58">পঞ্চগড় </option>
              <option value="59">রংপুর </option>
              <option value="60">ঠাকুরগাঁও</option>
              <option value="61">হবিগঞ্জ </option>
              <option value="62">মৌলভীবাজার </option>
              <option value="63">সুনামগঞ্জ </option>
              <option value="64">সিলেট</option>
            </select>

            <select class="up-info" id="upj" name="upj" required="">
              <option value="">উপজেলা বাছাই করুন</option>
              <option value="">মাদারীপুর</option>
              <option value="">কালকিনী</option>
              <option value="">রাজোর</option>
            </select>

            <select class="up-info" id="up" name="up" required="">
              <option value="">ইউনিয়ন বাছাই করুন</option>
              <option value="">ধুরাইল</option>
              <option value="">কুনিয়া</option>
              <option value="">রাস্তি</option>
            </select>
            <select class="up-info" id="up" name="up" required="">
              <option value="">ধরণ বাছাই করুন</option>
              <option value="">চেয়ারম্যান প্রোফাইল</option>
              <option value="">সচিব প্রোফাইল</option>
              <option value="">উদ্দোক্তা প্রোফাইল</option>
              <option value="">মেম্বার লিস্ট</option>
              <option value="">মহিলা মেম্বার লিস্ট</option>
              <option value="">গ্রাম পুলিশ লিস্ট</option>
              <option value="">ইউ‌নিয়ন প‌রিষদ সম্প‌র্কে</option>
            </select>

            <input type="button" value="দেখুন" />
          </form>
        </div>
      </Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              <Col></Col>
              <Col></Col>
            </Item>
            <Item>
              <h3>আমা‌দের অনলাইন সেবা সমূহ</h3>
              <Row className="justify-content-left">
                <Col>
                  <h5>উত্তরাধিকার সনদ</h5>
                  <h5> মৃত্যু সনদ</h5>
                  <h5>জাতীয়তা সনদ </h5>
                  <h5>ভূমিহীন সনদ </h5>
                  <h5>উপজাতি সনদ </h5>
                  <h5> চারিত্রিক সনদ</h5>
                  <h5> মুক্তিযোদ্ধা সনদ</h5>
                  <h5> বার্ষিক আয়ের সনদ</h5>
                  <h5> ট্রেড লাই‌সেন্স</h5>
                  <h5>ভাতার আ‌বেদন </h5>
                  <h5> ভিসা যাচাই</h5>
                </Col>
                <Col>
                  <h5>এতিম সনদ </h5>
                  <h5>বিবাহিত সনদ </h5>
                  <h5> মাসিক আয়ের সনদ </h5>
                  <h5>অবিবাহিত সনদ</h5>
                  <h5>পুনঃবিবাহ সনদ</h5>
                  <h5>বেকারত্ব সনদ</h5>
                  <h5>বিবিধ সনদ</h5>
                  <h5>ভূ‌মিহীন সনদ</h5>
                  <h5>একই না‌মের প্রত‌্যয়ন</h5>
                  <h5>জন্ম নিবন্ধন আ‌বেদন</h5>
                  <h5>ইউ.পি প্রদত্ত সকল নাগ‌রিক সেবা</h5>
                </Col>
              </Row>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeInformation;
