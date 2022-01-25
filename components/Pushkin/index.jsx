import React from "react";
import Frame143 from "../Frame143";
import Frame53 from "../Frame53";
import X200 from "../X200";
import styled from "styled-components";
import {
  YesevaoneNormalBlack139px,
  OpensansNormalBlack93px,
  OpensansNormalBlack115px,
  OpensansBoldWhite84px,
} from "../../styledMixins";
import "./Pushkin.css";

class Pushkin extends React.Component {
  render() {
    const {
      close,
      maskGroup,
      text19,
      text20,
      text21,
      text22,
      text23,
      text24,
      frame143Props,
      frame53Props,
      x2001Props,
      x2002Props,
    } = this.props;

    return (
      <div className="pushkin screen">
        <View>
          <Close src={close} />
          <Frame145>
            <Frame153>
              <Frame144>
                <MaskGroup src={maskGroup} />
                <Frame142>
                  <Frame143 text1={frame143Props.text1} text2={frame143Props.text2} />
                  <Frame151>
                    <Text19>{text19}</Text19>
                  </Frame151>
                </Frame142>
              </Frame144>
              <Text20>{text20}</Text20>
            </Frame153>
            <Frame53 frame521Props={frame53Props.frame521Props} frame522Props={frame53Props.frame522Props} />
          </Frame145>
          <Frame146>
            <Frame50>
              <Frame55>
                <Text21>{text21}</Text21>
                <Text22>{text22}</Text22>
              </Frame55>
              <X200>{x2001Props.children}</X200>
            </Frame50>
            <Frame51>
              <Frame551>
                <Text23>{text23}</Text23>
                <Text22>{text24}</Text22>
              </Frame551>
              <X200 className={x2002Props.className}>{x2002Props.children}</X200>
            </Frame51>
          </Frame146>
        </View>
      </div>
    );
  }
}

const View = styled.div`
  margin-top: 91px;
  width: 463px;
  height: 663px;
  margin-left: 488px;
  display: flex;
  flex-direction: column;
  background-color: var(--kxk1og);
  border-radius: 16px;
`;

const Close = styled.img`
  margin-left: 404px;
  width: 26px;
  height: 26px;
  margin-top: 42.9px;
`;

const Frame145 = styled.div`
  margin-left: 48px;
  width: 367px;
  height: 204px;
  position: relative;
  margin-top: 15.1px;
  display: flex;
  flex-direction: column;
`;

const Frame153 = styled.div`
  margin-left: 18px;
  width: 331px;
  height: 154px;
  display: flex;
  flex-direction: column;
`;

const Frame144 = styled.div`
  width: 265.9883728027344px;
  display: flex;
`;

const MaskGroup = styled.img`
  width: 82px;
  height: 82px;
`;

const Frame142 = styled.div`
  margin-top: 4px;
  width: 157px;
  height: 74px;
  position: relative;
  margin-left: 27px;
  display: flex;
  flex-direction: column;
`;

const Frame151 = styled.div`
  width: 64px;
  height: 15px;
  margin-top: 8px;
  display: flex;
  background-color: var(--x--250);
  border-radius: 3.27px;
`;

const Text19 = styled.div`
  ${OpensansBoldWhite84px}
  margin-top: 1.5px;
  width: 49px;
  height: 12px;
  margin-left: 7.5px;
  letter-spacing: 0.13px;
`;

const Text20 = styled.p`
  ${OpensansNormalBlack115px}
  height: 47px;
  margin-top: 25px;
  letter-spacing: -0.06px;
`;

const Frame146 = styled.div`
  margin-left: 77px;
  width: 310px;
  height: 326px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const Frame50 = styled.div`
  margin-left: 7px;
  width: 296.0500183105469px;
  height: 143.375px;
  position: relative;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  background-color: var(--kxk1og);
  border-radius: 7.75px;
  box-shadow: 0px 0px 7.914212226867676px #0000001a;
  transition: all 0.8s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Frame55 = styled.div`
  margin-left: 23.7px;
  width: 248.74916076660156px;
  height: 50.49357223510742px;
  margin-top: 20.8px;
  display: flex;
  flex-direction: column;
`;

const Text21 = styled.div`
  ${YesevaoneNormalBlack139px}
  margin-left: 32.1px;
  width: 184.46202087402344px;
  height: 17.04599380493164px;
  text-align: center;
  letter-spacing: -0.07px;
`;

const Text22 = styled.p`
  ${OpensansNormalBlack93px}
  height: 26px;
  margin-top: 7.4px;
  text-align: center;
  letter-spacing: -0.05px;
`;

const Frame51 = styled.div`
  margin-left: 7px;
  width: 296.0500183105469px;
  height: 143.375px;
  position: relative;
  margin-top: 23.2px;
  display: flex;
  flex-direction: column;
  background-color: var(--kxk1og);
  border-radius: 7.75px;
  box-shadow: 0px 0px 7.914212226867676px #0000001a;
`;

const Frame551 = styled.div`
  margin-left: 23.7px;
  width: 248.74916076660156px;
  height: 50.49357223510742px;
  margin-top: 20.8px;
  display: flex;
  flex-direction: column;
  opacity: 0.5;
`;

const Text23 = styled.div`
  ${YesevaoneNormalBlack139px}
  margin-left: 21.8px;
  width: 205.16075134277344px;
  height: 17.04599380493164px;
  text-align: center;
  letter-spacing: -0.07px;
`;

export default Pushkin;
