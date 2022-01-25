import React from "react";
import { Link } from "react-router-dom";
import X6HkuEU from "../X6HkuEU";
import X6003 from "../X6003";
import styled from "styled-components";
import {
  OpensansNormalBlack13px,
  YesevaoneNormalBlack40px,
  OpensansNormalBlack165px,
  OpensansNormalBlack158px,
  OpensansNormalBlack137px,
  OpensansNormalBlack159px,
} from "../../styledMixins";
import "./LandingCaucasus.css";

class LandingCaucasus extends React.Component {
  render() {
    const {
      close,
      text35,
      frame521,
      image45,
      spanText1,
      spanText2,
      image1,
      spanText3,
      spanText4,
      frame522,
      frame523,
      frame524,
      image46,
      spanText5,
      spanText6,
      frame525,
      frame54,
      frame551,
      image2,
      spanText7,
      spanText8,
      frame56,
      frame552,
      image3,
      spanText9,
      spanText10,
      x6HkuEUProps,
      x6003Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="landing-caucasus screen">
          <FlexCol>
            <Link to="/index" className="align-self-flex-end">
              <Close src={close} />
            </Link>
            <X6HkuEU className={x6HkuEUProps.className} />
            <Text35>{text35}</Text35>
            <Frame52 className="animate-enter19" show-on-scroll src={frame521} />
            <OverlapGroup>
              <View>
                <Image45 src={image45} />
                <Text32>
                  <Span011>{spanText1}</Span011>
                  <Span011>{spanText2}</Span011>
                </Text32>
              </View>
              <Frame53>
                <Image src={image1} />
                <Text33>
                  <Span012>{spanText3}</Span012>
                  <Span012>{spanText4}</Span012>
                </Text33>
              </Frame53>
              <Frame521 className="animate-enter18" show-on-scroll src={frame522} />
              <Frame522 className="animate-enter20" show-on-scroll src={frame523} />
              <Frame523 className="animate-enter21" show-on-scroll src={frame524} />
              <View1>
                <Image46 src={image46} />
                <Text36>
                  <Span013>{spanText5}</Span013>
                  <Span013>{spanText6}</Span013>
                </Text36>
              </View1>
              <Frame524 className="animate-enter22" src={frame525} />
              <Frame54 className="animate-enter23" src={frame54} />
              <Frame55 className="animate-enter26" show-on-scroll src={frame551} />
            </OverlapGroup>
            <Image1 src={image2} />
            <Text37>
              <Span014>{spanText7}</Span014>
              <Span014>{spanText8}</Span014>
            </Text37>
            <Frame56 className="animate-enter24" show-on-scroll src={frame56} />
          </FlexCol>
          <FlexRow>
            <Frame551 className="animate-enter25" show-on-scroll src={frame552} />
            <FlexCol1>
              <Image2 src={image3} />
              <Text38>
                <Span015>{spanText9}</Span015>
                <Span015>{spanText10}</Span015>
              </Text38>
            </FlexCol1>
          </FlexRow>
          <X6003 text_Label={x6003Props.text_Label} className={x6003Props.className} />
        </div>
      </div>
    );
  }
}

const FlexCol = styled.div`
  width: 1473px;
  position: relative;
  align-self: flex-end;
  margin-right: -28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 3977px;
`;

const Close = styled.img`
  width: 24px;
  height: 24px;
  align-self: flex-end;
  margin-right: 78px;
  cursor: pointer;
`;

const Text35 = styled.div`
  ${YesevaoneNormalBlack40px}
  min-height: 46px;
  align-self: center;
  margin-top: 93px;
  margin-right: 23px;
  min-width: 380px;
  letter-spacing: -0.2px;
`;

const Frame52 = styled.img`
  width: 712px;
  height: 124px;
  margin-top: 121px;
  margin-left: 105px;
  display: block;
  opacity: 0;

  &.animate-enter19 {
    display: block;
    animation: animate-enter19-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const OverlapGroup = styled.div`
  width: 1473px;
  height: 2515px;
  position: relative;
  margin-top: 20px;
`;

const View = styled.div`
  position: absolute;
  width: 878px;
  height: 674px;
  top: 114px;
  left: 569px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Image45 = styled.img`
  margin-right: 2px;
  width: 876px;
  height: 612px;
  margin-top: -0.1px;
  object-fit: cover;
`;

const Text32 = styled.p`
  ${OpensansNormalBlack158px}
  margin-right: 25.0px;
  width: 388.9294738769531px;
  height: 44.82987594604492px;
  margin-top: 16.9px;
  text-align: right;
  letter-spacing: -0.08px;
`;

const Span011 = styled.span`
  ${OpensansNormalBlack158px}
  letter-spacing: -0.01px;
`;

const Span012 = styled.span`
  ${OpensansNormalBlack137px}
  letter-spacing: -0.01px;
`;

const Span013 = styled.span`
  ${OpensansNormalBlack165px}
  letter-spacing: -0.01px;
`;

const Span014 = styled.span`
  ${OpensansNormalBlack159px}
  letter-spacing: -0.01px;
`;

const Span015 = styled.span`
  ${OpensansNormalBlack13px}
  letter-spacing: -0.01px;
`;

const Frame53 = styled.div`
  position: absolute;
  width: 748px;
  height: 653px;
  top: 877px;
  left: 0;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 748px;
  height: 626px;
  margin-top: 0;
  object-fit: cover;
`;

const Text33 = styled.p`
  ${OpensansNormalBlack137px}
  margin-left: 14.8px;
  width: 538.6441650390625px;
  height: 18.936708450317383px;
  margin-top: 8.6px;
  letter-spacing: -0.07px;
`;

const Frame521 = styled.img`
  position: absolute;
  width: 712px;
  height: 125px;
  top: 759px;
  left: 100px;
  display: block;
  opacity: 0;

  &.animate-enter18 {
    display: block;
    animation: animate-enter18-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const Frame522 = styled.img`
  position: absolute;
  width: 712px;
  height: 157px;
  top: 0;
  left: 105px;
  display: block;
  opacity: 0;

  &.animate-enter20 {
    display: block;
    animation: animate-enter20-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const Frame523 = styled.img`
  position: absolute;
  width: 712px;
  height: 149px;
  top: 585px;
  left: 100px;
  display: block;
  opacity: 0;

  &.animate-enter21 {
    display: block;
    animation: animate-enter21-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const View1 = styled.div`
  position: absolute;
  width: 990px;
  height: 825px;
  top: 1635px;
  left: 483px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Image46 = styled.img`
  margin-right: 35px;
  width: 955px;
  height: 783px;
  margin-top: -0.3px;
  object-fit: cover;
`;

const Text36 = styled.div`
  ${OpensansNormalBlack165px}
  margin-right: 2px;
  width: 595.0888061523438px;
  height: 22.888031005859375px;
  margin-top: 19.7px;
  letter-spacing: -0.08px;
`;

const Frame524 = styled.img`
  position: absolute;
  width: 776px;
  height: 175px;
  top: 1312px;
  left: 569px;
  display: block;
  opacity: 0;

  &.animate-enter22 {
    display: block;
    animation: animate-enter22-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const Frame54 = styled.img`
  position: absolute;
  width: 776px;
  height: 175px;
  top: 1516px;
  left: 569px;
  display: block;
  opacity: 0;

  &.animate-enter23 {
    display: block;
    animation: animate-enter23-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const Frame55 = styled.img`
  position: absolute;
  width: 650px;
  height: 125px;
  top: 2390px;
  left: 105px;
  display: block;
  opacity: 0;

  &.animate-enter26 {
    display: block;
    animation: animate-enter26-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const Image1 = styled.img`
  width: 729px;
  height: 547px;
  margin-top: 56px;
  margin-left: 104.83px;
`;

const Text37 = styled.p`
  ${OpensansNormalBlack159px}
  width: 579px;
  min-height: 44px;
  margin-top: 15px;
  margin-left: 107.45px;
  letter-spacing: -0.08px;
`;

const Frame56 = styled.img`
  width: 712px;
  height: 275px;
  align-self: flex-end;
  margin-top: 20px;
  margin-right: 130px;
  display: block;
  opacity: 0;

  &.animate-enter24 {
    display: block;
    animation: animate-enter24-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const FlexRow = styled.div`
  height: 558px;
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  min-width: 1240px;
`;

const Frame551 = styled.img`
  width: 513px;
  height: 224px;
  align-self: flex-end;
  display: block;
  opacity: 0;

  &.animate-enter25 {
    display: block;
    animation: animate-enter25-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const FlexCol1 = styled.div`
  width: 596px;
  margin-left: 131px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 502px;
`;

const Image2 = styled.img`
  width: 596px;
  height: 446px;
`;

const Text38 = styled.p`
  ${OpensansNormalBlack13px}
  min-height: 36px;
  margin-top: 20px;
  min-width: 520px;
  text-align: right;
  letter-spacing: -0.07px;
`;

export default LandingCaucasus;
