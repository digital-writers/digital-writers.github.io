import React from "react";
import { Link } from "react-router-dom";
import Frame143 from "../Frame143";
import Frame53 from "../Frame53";
import styled from "styled-components";
import { OpensansNormalBlack115px, OpensansBoldWhite84px } from "../../styledMixins";
import "./Lermontov.css";

class Lermontov extends React.Component {
  render() {
    const {
      close,
      frame33,
      phone,
      text3,
      image31,
      text4,
      image29,
      text5,
      image27,
      text6,
      frame148,
      frame143Props,
      frame53Props,
    } = this.props;

    return (
      <div className="lermontov screen">
        <View>
          <Close src={close} />
          <Frame145>
            <Frame153>
              <Frame144>
                <Frame33 src={frame33} />
                <Frame142>
                  <Frame143 text1={frame143Props.text1} text2={frame143Props.text2} />
                  <Frame151>
                    <Phone>{phone}</Phone>
                  </Frame151>
                </Frame142>
              </Frame144>
              <Text3>{text3}</Text3>
            </Frame153>
            <Frame53 frame521Props={frame53Props.frame521Props} frame522Props={frame53Props.frame522Props} />
          </Frame145>
          <Frame149>
            <Frame7>
              <Link to="/landing-duel">
                <Frame6>
                  <Image31 src={image31} />
                  <Text4>{text4}</Text4>
                </Frame6>
              </Link>
              <Link to="/landing-paint">
                <Frame71>
                  <Image29 src={image29} />
                  <Text5>{text5}</Text5>
                </Frame71>
              </Link>
              <Link to="/landing-caucasus">
                <Frame8>
                  <Image27 src={image27} />
                  <Text6>{text6}</Text6>
                </Frame8>
              </Link>
            </Frame7>
          </Frame149>
          <Frame148 src={frame148} />
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

const Frame33 = styled.img`
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
  width: 60px;
  height: 15px;
  margin-top: 8px;
  display: flex;
  background-color: var(--x--250);
  border-radius: 3.27px;
`;

const Phone = styled.div`
  ${OpensansBoldWhite84px}
  margin-top: 1.5px;
  width: 46px;
  height: 12px;
  margin-left: 7px;
  letter-spacing: 0.13px;
`;

const Text3 = styled.p`
  ${OpensansNormalBlack115px}
  height: 47px;
  margin-top: 25px;
  letter-spacing: -0.06px;
`;

const Frame149 = styled.div`
  margin-left: 20px;
  width: 443px;
  margin-top: 35px;
  display: flex;
  overflow: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const Frame7 = styled.div`
  width: 636.537109375px;
  height: 198px;
  display: flex;
`;

const Frame6 = styled.div`
  margin-top: 8.2px;
  width: 198px;
  height: 181px;
  margin-left: 8.2px;
  display: flex;
  flex-direction: column;
  background-color: var(--x--350);
  border-radius: 6px;
  box-shadow: 0px 1.678008794784546px 3.356017589569092px #0000001a;
  cursor: pointer;
`;

const Image31 = styled.img`
  margin-left: 24.2px;
  width: 149.5px;
  height: 93.5px;
  margin-top: 23px;
  object-fit: cover;
`;

const Text4 = styled.div`
  margin-left: 31.5px;
  width: 135.0797119140625px;
  height: 15.102080345153809px;
  margin-top: 26.3px;
  font-family: var(--font-family-yeseva_one);
  font-weight: 400;
  color: var(--kxk1og);
  font-size: 13.4px;
  text-align: center;
  letter-spacing: -0.07px;
`;

const Frame71 = styled.div`
  margin-top: 8.2px;
  width: 198px;
  height: 181px;
  margin-left: 13.1px;
  display: flex;
  flex-direction: column;
  background-color: var(--x--800);
  border-radius: 6px;
  box-shadow: 0px 1.678008794784546px 3.356017589569092px #0000001a;
  cursor: pointer;
`;

const Image29 = styled.img`
  margin-left: 19.8px;
  width: 158.5px;
  height: 93.5px;
  margin-top: 23px;
  object-fit: cover;
`;

const Text5 = styled.div`
  margin-left: 39px;
  width: 119.97764587402344px;
  height: 15.102080345153809px;
  margin-top: 26.3px;
  font-family: var(--font-family-yeseva_one);
  font-weight: 400;
  color: var(--x--);
  font-size: 13.4px;
  text-align: center;
  letter-spacing: -0.07px;
`;

const Frame8 = styled.div`
  margin-top: 8.2px;
  width: 198px;
  height: 181px;
  margin-left: 13.1px;
  display: flex;
  flex-direction: column;
  background-color: var(--tu55cu);
  border-radius: 6px;
  box-shadow: 0px 1.678008794784546px 3.356017589569092px #0000001a;
  cursor: pointer;
`;

const Image27 = styled.img`
  margin-left: 23.8px;
  width: 150.5px;
  height: 93.5px;
  margin-top: 23px;
  object-fit: cover;
`;

const Text6 = styled.div`
  margin-left: 16.8px;
  width: 164.44488525390625px;
  height: 15.102080345153809px;
  margin-top: 26.3px;
  font-family: var(--font-family-yeseva_one);
  font-weight: 400;
  color: #61515a;
  font-size: 13.4px;
  text-align: center;
  letter-spacing: -0.07px;
`;

const Frame148 = styled.img`
  margin-left: 190px;
  width: 83px;
  height: 18px;
  margin-top: 66px;
`;

export default Lermontov;
