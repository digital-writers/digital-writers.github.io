import React from "react";
import X600 from "../X600";
import Active from "../Active";
import Active2 from "../Active2";
import Inactive from "../Inactive";
import Inactive2 from "../Inactive2";
import X6002 from "../X6002";
import styled from "styled-components";
import { OpensansNormalBlack24px } from "../../styledMixins";
import "./Index.css";

class Index extends React.Component {
  render() {
    const {
      arrow2,
      maskGroup,
      digital,
      text7,
      arrow6,
      text8,
      text9,
      x600Props,
      activeProps,
      active2Props,
      inactiveProps,
      inactive2Props,
      x6002Props,
    } = this.props;

    return (
      <div className="index screen">
        <a href="http://pushkinskijdom.ru/" target="_blank">
          <Frame92>
            <Arrow2 src={arrow2} />
            <X600>{x600Props.children}</X600>
          </Frame92>
        </a>
        <Frame68>
          <MaskGroup src={maskGroup} />
          <Frame67>
            <Digital>{digital}</Digital>
            <Text7>{text7}</Text7>
          </Frame67>
        </Frame68>
        <Arrow6 className="animate-enter3" show-on-scroll src={arrow6} />
        <Frame93 className="animate-enter1" show-on-scroll>
          <Text8>{text8}</Text8>
          <Text9>{text9}</Text9>
        </Frame93>
        <Frame125 className="animate-enter2" show-on-scroll>
          <Frame124>
            <Active
              photo_20210627_231123RemovebgPrevie={activeProps.photo_20210627_231123RemovebgPrevie}
              spanText1={activeProps.spanText1}
              spanText2={activeProps.spanText2}
              spanText3={activeProps.spanText3}
            />
            <Active2
              overlapGroup={active2Props.overlapGroup}
              photo_20210627_231128RemovebgPrevie={active2Props.photo_20210627_231128RemovebgPrevie}
              spanText1={active2Props.spanText1}
              spanText2={active2Props.spanText2}
              spanText3={active2Props.spanText3}
            />
          </Frame124>
          <Frame1251>
            <Inactive
              photo_20210627_231132RemovebgPrevie={inactiveProps.photo_20210627_231132RemovebgPrevie}
              spanText1={inactiveProps.spanText1}
              spanText2={inactiveProps.spanText2}
              spanText3={inactiveProps.spanText3}
            />
            <Inactive2
              frame128={inactive2Props.frame128}
              photo_20210627_231139RemovebgPrevie={inactive2Props.photo_20210627_231139RemovebgPrevie}
              spanText1={inactive2Props.spanText1}
              spanText2={inactive2Props.spanText2}
              spanText3={inactive2Props.spanText3}
            />
          </Frame1251>
        </Frame125>
        <X6002>{x6002Props.children}</X6002>
      </div>
    );
  }
}

const Frame92 = styled.div`
  margin-left: 100px;
  width: 211px;
  height: 26px;
  position: relative;
  margin-top: 100px;
  display: flex;
  cursor: pointer;
`;

const Arrow2 = styled.img`
  margin-top: 5.5px;
  width: 52px;
  height: 15px;
  margin-left: -1px;
`;

const Frame68 = styled.div`
  margin-left: 239px;
  width: 963px;
  margin-top: 316px;
  display: flex;
`;

const MaskGroup = styled.img`
  margin-top: 8.6px;
  width: 222.5px;
  height: 122px;
  margin-left: -0.1px;
`;

const Frame67 = styled.div`
  width: 756.5462646484375px;
  height: 139.1005859375px;
  margin-left: 59.9px;
  display: flex;
  flex-direction: column;
`;

const Digital = styled.h1`
  height: 88.10057830810547px;
  font-family: var(--font-family-yeseva_one);
  font-weight: 400;
  color: var(--x--500);
  font-size: 76.2px;
  letter-spacing: -0.38px;
`;

const Text7 = styled.div`
  ${OpensansNormalBlack24px}
  width: 487px;
  height: 31px;
  margin-top: 20px;
  letter-spacing: -0.12px;
`;

const Arrow6 = styled.img`
  margin-left: 701.5px;
  width: 37px;
  height: 136px;
  margin-top: 115.4px;
  display: block;
  opacity: 0;

  &.animate-enter3 {
    display: block;
    animation: animate-enter3-frames 0.5s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

const Frame93 = styled.div`
  margin-left: 316px;
  width: 809px;
  height: 239px;
  margin-top: 196.5px;
  flex-direction: column;
  opacity: 0;

  &.animate-enter1 {
    animation: animate-enter1-frames 0.5s ease-in-out 0.2s 1 normal forwards;
    opacity: 0;
  }
`;

const Text8 = styled.div`
  width: 287px;
  height: 42px;
  font-family: var(--font-family-yeseva_one);
  font-weight: 400;
  color: #515899;
  font-size: 36px;
  letter-spacing: -0.18px;
`;

const Text9 = styled.div`
  ${OpensansNormalBlack24px}
  height: 126px;
  margin-top: 25px;
  letter-spacing: 0;
  line-height: 38.2px;
`;

const Frame125 = styled.div`
  margin-left: 371px;
  width: 698px;
  height: 714px;
  margin-top: 125px;
  flex-direction: column;
  opacity: 0;

  &.animate-enter2 {
    animation: animate-enter2-frames 0.5s ease-in-out 0.2s 1 normal forwards;
    opacity: 0;
  }
`;

const Frame124 = styled.div`
  margin-left: 10px;
  width: 678px;
  height: 322px;
  position: relative;
  margin-top: 10px;
  display: flex;
`;

const Frame1251 = styled.div`
  margin-left: 10px;
  width: 678px;
  height: 322px;
  position: relative;
  margin-top: 50px;
  display: flex;
`;

export default Index;
