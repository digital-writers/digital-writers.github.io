import React from "react";
import { Link } from "react-router-dom";
import X6HkuEU from "../X6HkuEU";
import X6003 from "../X6003";
import styled from "styled-components";
import { YesevaoneNormalBlack40px, OpensansNormalBlack144px } from "../../styledMixins";
import "./LandingDuel.css";

class LandingDuel extends React.Component {
  render() {
    const {
      close,
      text14,
      image30,
      spanText1,
      spanText2,
      frame110,
      frame111,
      image1,
      x24,
      frame108,
      frame109,
      image2,
      frame112,
      frame113,
      frame1561,
      x6003Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="landing-duel screen">
          <FlexCol>
            <Link to="/index" className="align-self-flex-end">
              <Close src={close} />
            </Link>
            <X6HkuEU />
            <Text14>{text14}</Text14>
            <OverlapGroup1>
              <OverlapGroup2>
                <OverlapGroup>
                  <View>
                    <Image30 src={image30} />
                    <Text16>
                      <Span04>{spanText1}</Span04>
                      <Span04>{spanText2}</Span04>
                    </Text16>
                  </View>
                  <Frame110 className="animate-enter10" show-on-scroll src={frame110} />
                </OverlapGroup>
                <Frame111 className="animate-enter6" show-on-scroll src={frame111} />
                <Image className="animate-enter7" show-on-scroll src={image1} />
                <X24 src={x24} />
              </OverlapGroup2>
              <Frame108 className="animate-enter8" show-on-scroll src={frame108} />
              <Frame109 className="animate-enter9" show-on-scroll src={frame109} />
            </OverlapGroup1>
          </FlexCol>
          <FlexRow>
            <Image1 src={image2} />
            <FrameContainer>
              <Frame112 className="animate-enter4" show-on-scroll src={frame112} />
              <Frame113 className="animate-enter5" show-on-scroll src={frame113} />
              <Frame1561 src={frame1561} />
            </FrameContainer>
          </FlexRow>
          <X6003 text_Label={x6003Props.text_Label} />
        </div>
      </div>
    );
  }
}

const FlexCol = styled.div`
  width: 1346px;
  position: relative;
  align-self: flex-end;
  margin-right: -2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1639px;
`;

const Close = styled.img`
  width: 24px;
  height: 24px;
  align-self: flex-end;
  margin-right: 52px;
  cursor: pointer;
`;

const Text14 = styled.div`
  ${YesevaoneNormalBlack40px}
  min-height: 46px;
  align-self: center;
  margin-top: 93px;
  margin-right: 82px;
  min-width: 452px;
  letter-spacing: -0.2px;
`;

const OverlapGroup1 = styled.div`
  width: 1346px;
  height: 1343px;
  position: relative;
  margin-top: 56px;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 1346px;
  height: 1343px;
  top: 0;
  left: 0;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 1346px;
  height: 906px;
  top: 338px;
  left: 0;
`;

const View = styled.div`
  position: absolute;
  width: 888px;
  height: 748px;
  top: 158px;
  left: 458px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Image30 = styled.img`
  margin-right: 2px;
  width: 886px;
  height: 716px;
  margin-top: -0.3px;
  object-fit: cover;
`;

const Text16 = styled.p`
  ${OpensansNormalBlack144px}
  margin-right: 30.4px;
  width: 852.13232421875px;
  height: 26.879776000976562px;
  margin-top: 5.6px;
  text-align: right;
  letter-spacing: -0.07px;
`;

const Span04 = styled.span`
  ${OpensansNormalBlack144px}
  letter-spacing: -0.01px;
`;

const Frame110 = styled.img`
  position: absolute;
  width: 675px;
  height: 194px;
  top: 0;
  left: 0;
  display: block;
  opacity: 0;

  &.animate-enter10 {
    display: block;
    animation: animate-enter10-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const Frame111 = styled.img`
  position: absolute;
  width: 419px;
  height: 115px;
  top: 902px;
  left: 4px;
  display: block;
  opacity: 0;

  &.animate-enter6 {
    display: block;
    animation: animate-enter6-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const Image = styled.img`
  position: absolute;
  width: 388px;
  height: 302px;
  top: 1041px;
  left: 4px;
  display: block;
  opacity: 0;

  &.animate-enter7 {
    display: block;
    animation: animate-enter7-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const X24 = styled.img`
  position: absolute;
  width: 284px;
  height: 379px;
  top: 0;
  left: 945px;
`;

const Frame108 = styled.img`
  position: absolute;
  width: 682px;
  height: 65px;
  top: 70px;
  left: 0;
  display: block;
  opacity: 0;

  &.animate-enter8 {
    display: block;
    animation: animate-enter8-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const Frame109 = styled.img`
  position: absolute;
  width: 682px;
  height: 165px;
  top: 154px;
  left: 0;
  display: block;
  opacity: 0;

  &.animate-enter9 {
    display: block;
    animation: animate-enter9-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const FlexRow = styled.div`
  height: 759px;
  margin-top: 40px;
  margin-left: -0.24px;
  display: flex;
  align-items: flex-start;
  min-width: 1340px;
`;

const Image1 = styled.img`
  width: 757px;
  height: 496px;
  margin-top: 41px;
  object-fit: cover;
`;

const FrameContainer = styled.div`
  width: 511px;
  margin-left: 72px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 759px;
`;

const Frame112 = styled.img`
  width: 511px;
  height: 119px;
  display: block;
  opacity: 0;

  &.animate-enter4 {
    display: block;
    animation: animate-enter4-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const Frame113 = styled.img`
  width: 468px;
  height: 140px;
  margin-top: 24px;
  display: block;
  opacity: 0;

  &.animate-enter5 {
    display: block;
    animation: animate-enter5-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const Frame1561 = styled.img`
  width: 145px;
  height: 420px;
  margin-top: 56px;
  margin-right: 43px;
  object-fit: cover;
`;

export default LandingDuel;
