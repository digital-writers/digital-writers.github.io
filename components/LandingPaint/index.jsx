import React from "react";
import { Link } from "react-router-dom";
import X6HkuEU from "../X6HkuEU";
import X6003 from "../X6003";
import styled from "styled-components";
import {
  OpensansNormalBlack18px,
  YesevaoneNormalBlack40px,
  OpensansNormalBlack17px,
  OpensansNormalBlack138px,
  OpensansNormalBlack163px,
} from "../../styledMixins";
import "./LandingPaint.css";

class LandingPaint extends React.Component {
  render() {
    const {
      close,
      text25,
      frame521,
      image37,
      spanText1,
      spanText2,
      image38,
      spanText3,
      spanText4,
      frame50,
      frame522,
      frame523,
      image1,
      spanText5,
      spanText6,
      frame524,
      image2,
      spanText7,
      spanText8,
      image42,
      spanText9,
      spanText10,
      frame525,
      overlapGroup1,
      spanText11,
      spanText12,
      spanText13,
      x6HkuEUProps,
      x6003Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="landing-paint screen">
          <FlexCol>
            <FlexCol1>
              <Link to="/index" className="align-self-flex-end">
                <Close src={close} />
              </Link>
              <X6HkuEU className={x6HkuEUProps.className} />
              <Text25>{text25}</Text25>
              <OverlapGroup3>
                <Frame52 className="animate-enter12" show-on-scroll src={frame521} />
                <OverlapGroupContainer>
                  <OverlapGroup>
                    <Image37 src={image37} />
                    <Text31>
                      <Span05>{spanText1}</Span05>
                      <Span05>{spanText2}</Span05>
                    </Text31>
                  </OverlapGroup>
                  <OverlapGroup2>
                    <View>
                      <Image38 src={image38} />
                      <Text30>
                        <Span06>{spanText3}</Span06>
                        <Span06>{spanText4}</Span06>
                      </Text30>
                    </View>
                    <Frame50 className="animate-enter11" show-on-scroll src={frame50} />
                    <Frame521 className="animate-enter14" show-on-scroll src={frame522} />
                  </OverlapGroup2>
                </OverlapGroupContainer>
                <Frame522 className="animate-enter13" show-on-scroll src={frame523} />
              </OverlapGroup3>
            </FlexCol1>
            <FlexRow>
              <Group2>
                <Image src={image1} />
                <Text27>
                  <Span07>{spanText5}</Span07>
                  <Span07>{spanText6}</Span07>
                </Text27>
              </Group2>
              <FlexCol2>
                <Frame523 className="animate-enter15" show-on-scroll src={frame524} />
                <Image1 src={image2} />
                <Text28>
                  <Span07>{spanText7}</Span07>
                  <Span07>{spanText8}</Span07>
                </Text28>
              </FlexCol2>
            </FlexRow>
          </FlexCol>
          <FlexRow1>
            <View1>
              <Image42 src={image42} />
              <Text29>
                <Span07>{spanText9}</Span07>
                <Span07>{spanText10}</Span07>
              </Text29>
            </View1>
            <FlexCol3>
              <Frame524 className="animate-enter17" show-on-scroll src={frame525} />
              <View2 className="animate-enter16" show-on-scroll>
                <OverlapGroup1 style={{ backgroundImage: `url(${overlapGroup1})` }}>
                  <TextLabel>
                    <Span010>{spanText11}</Span010>
                    <Span110>{spanText12}</Span110>
                    <Span010>{spanText13}</Span010>
                  </TextLabel>
                </OverlapGroup1>
              </View2>
            </FlexCol3>
          </FlexRow1>
          <X6003 text_Label={x6003Props.text_Label} className={x6003Props.className} />
        </div>
      </div>
    );
  }
}

const FlexCol = styled.div`
  width: 1344px;
  align-self: flex-end;
  margin-right: -2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 2534px;
`;

const FlexCol1 = styled.div`
  width: 1342px;
  position: relative;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1755px;
`;

const Close = styled.img`
  width: 24px;
  height: 24px;
  align-self: flex-end;
  margin-right: 52px;
  cursor: pointer;
`;

const Text25 = styled.div`
  ${YesevaoneNormalBlack40px}
  min-height: 46px;
  align-self: center;
  margin-top: 117px;
  margin-right: 101px;
  min-width: 543px;
  letter-spacing: -0.2px;
`;

const OverlapGroup3 = styled.div`
  width: 1342px;
  height: 1419px;
  position: relative;
  margin-top: 96px;
`;

const Frame52 = styled.img`
  position: absolute;
  width: 468px;
  height: 114px;
  top: 25px;
  left: 799px;
  display: block;
  opacity: 0;

  &.animate-enter12 {
    display: block;
    animation: animate-enter12-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const OverlapGroupContainer = styled.div`
  position: absolute;
  width: 1342px;
  height: 1420px;
  top: 0;
  left: 0;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 404px;
  height: 568px;
  top: 0;
  left: 0;
`;

const Image37 = styled.img`
  position: absolute;
  width: 404px;
  height: 518px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Text31 = styled.div`
  ${OpensansNormalBlack17px}
  position: absolute;
  width: 362px;
  top: 518px;
  left: 0;
  letter-spacing: -0.08px;
`;

const Span05 = styled.span`
  ${OpensansNormalBlack17px}
  letter-spacing: -0.01px;
`;

const Span06 = styled.span`
  ${OpensansNormalBlack163px}
  letter-spacing: -0.01px;
`;

const Span07 = styled.span`
  ${OpensansNormalBlack138px}
  letter-spacing: -0.01px;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 1342px;
  height: 921px;
  top: 499px;
  left: 0;
`;

const View = styled.div`
  position: absolute;
  width: 980px;
  height: 785px;
  top: 135px;
  left: 362px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Image38 = styled.img`
  margin-right: 1.8px;
  width: 956px;
  height: 751px;
  margin-top: 0;
  object-fit: cover;
`;

const Text30 = styled.div`
  ${OpensansNormalBlack163px}
  margin-right: 28.0px;
  width: 951.9830932617188px;
  height: 27.19951629638672px;
  margin-top: 7.1px;
  text-align: right;
  letter-spacing: -0.08px;
`;

const Frame50 = styled.img`
  position: absolute;
  width: 404px;
  height: 125px;
  top: 246px;
  left: 0;
  display: block;
  opacity: 0;

  &.animate-enter11 {
    display: block;
    animation: animate-enter11-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const Frame521 = styled.img`
  position: absolute;
  width: 708px;
  height: 199px;
  top: 0;
  left: 558px;
  display: block;
  opacity: 0;

  &.animate-enter14 {
    display: block;
    animation: animate-enter14-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const Frame522 = styled.img`
  position: absolute;
  width: 663px;
  height: 227px;
  top: 204px;
  left: 603px;
  display: block;
  opacity: 0;

  &.animate-enter13 {
    display: block;
    animation: animate-enter13-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const FlexRow = styled.div`
  height: 767px;
  margin-top: 12px;
  display: flex;
  align-items: flex-start;
  min-width: 1263px;
`;

const Group2 = styled.div`
  width: 332px;
  height: 430px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  margin-left: -0.2px;
  width: 309px;
  height: 379px;
`;

const Text27 = styled.p`
  ${OpensansNormalBlack138px}
  width: 330px;
  height: 41px;
  margin-top: 10px;
  letter-spacing: -0.07px;
`;

const FlexCol2 = styled.div`
  width: 627px;
  align-self: flex-end;
  margin-left: 304px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 679px;
`;

const Frame523 = styled.img`
  width: 404px;
  height: 100px;
  margin-right: 23px;
  display: block;
  opacity: 0;

  &.animate-enter15 {
    display: block;
    animation: animate-enter15-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const Image1 = styled.img`
  width: 627px;
  height: 458px;
  margin-top: 63px;
`;

const Text28 = styled.p`
  ${OpensansNormalBlack138px}
  min-height: 38px;
  margin-top: 20px;
  margin-right: 16px;
  min-width: 529px;
  text-align: right;
  letter-spacing: -0.07px;
`;

const FlexRow1 = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  min-width: 1340px;
`;

const View1 = styled.div`
  width: 736px;
  height: 494px;
  display: flex;
  flex-direction: column;
`;

const Image42 = styled.img`
  margin-left: 0;
  width: 734px;
  height: 463px;
  margin-top: -0.5px;
  object-fit: cover;
`;

const Text29 = styled.p`
  ${OpensansNormalBlack138px}
  margin-left: 15px;
  width: 657.1773681640625px;
  height: 23.940887451171875px;
  margin-top: 7.5px;
  letter-spacing: -0.07px;
`;

const FlexCol3 = styled.div`
  width: 461px;
  margin-left: 143px;
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 360px;
`;

const Frame524 = styled.img`
  width: 404px;
  height: 175px;
  display: block;
  opacity: 0;

  &.animate-enter17 {
    display: block;
    animation: animate-enter17-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const View2 = styled.div`
  width: 460px;
  height: 151px;
  margin-top: 34px;
  margin-right: 1px;
  opacity: 0;

  &.animate-enter16 {
    animation: animate-enter16-frames 0.8s ease-in-out 0.7s 1 normal forwards;
    opacity: 0;
  }
`;

const OverlapGroup1 = styled.div`
  height: 151px;
  display: flex;
  padding: 0 22px;
  justify-content: flex-end;
  align-items: center;
  min-width: 458px;
  background-size: 100% 100%;
`;

const TextLabel = styled.div`
  ${OpensansNormalBlack18px}
  width: 409px;
  min-height: 105px;
  letter-spacing: -0.09px;
`;

const Span010 = styled.span`
  ${OpensansNormalBlack18px}
  letter-spacing: -0.02px;
`;

const Span110 = styled.span`
  font-family: var(--font-family-open_sans);
  font-weight: 700;
  color: var(--h8ji64);
  font-size: var(--font-size-xl);
  letter-spacing: -0.02px;
`;

export default LandingPaint;
