import React from "react";
import styled from "styled-components";
import { OpensansLightBlack208px, OpensansBoldBlack243px } from "../../styledMixins";


class X6HkuEU extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <View className={`view-8 ${className || ""}`}>
        <Frame33 className="frame-33-1" src="/img/frame-33-1@2x.png" />
        <Frame20 className="frame-20">
          <TextLabel className="text_label-2">Михаил Юрьевич</TextLabel>
          <Text15 className="text-15">Лермонтов</Text15>
        </Frame20>
      </View>
    );
  }
}

const View = styled.div`
  width: 194px;
  height: 77px;
  margin-left: 4px;
  display: flex;

  &.view-8.view-9 {
    height: 53px;
    margin-left: unset;
  }

  &.view-8.view-10 {
    margin-left: 105px;
  }
`;

const Frame33 = styled.img`
  width: 92px;
  height: 92px;
`;

const Frame20 = styled.div`
  margin-top: 8.7px;
  width: 218.71697998046875px;
  height: 74.64151000976562px;
  position: relative;
  margin-left: 26px;
`;

const TextLabel = styled.div`
  ${OpensansLightBlack208px}
  position: absolute;
  width: 165px;
  top: 9px;
  left: 0;
  letter-spacing: -0.1px;
`;

const Text15 = styled.div`
  ${OpensansBoldBlack243px}
  position: absolute;
  width: 198px;
  top: 35px;
  left: 0;
  letter-spacing: -0.12px;
  line-height: 31.8px;
  white-space: nowrap;
`;

export default X6HkuEU;
