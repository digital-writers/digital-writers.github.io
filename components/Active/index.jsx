import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  OpensansBoldBlack16px,
  OpensansSemiBoldBlack16px,
  OpensansNormalBlack16px,
  ValignTextBottom,
} from "../../styledMixins";


class Active extends React.Component {
  render() {
    const { photo_20210627_231123RemovebgPrevie, spanText1, spanText2, spanText3 } = this.props;

    return (
      <a href="javascript:ShowOverlay('pushkin', 'animate-appear');">
        <View>
          <Frame141>
            <Frame130>
              <OverlapGroup>
                <Vector src="/img/vector@2x.png" />
                <Photo20210627231123RemovebgPreview2 src={photo_20210627_231123RemovebgPrevie} />
              </OverlapGroup>
            </Frame130>
            <Text10>
              <span>
                <Span0>{spanText1}</Span0>
                <Span1>{spanText2}</Span1>
                <Span2>{spanText3}</Span2>
              </span>
            </Text10>
          </Frame141>
        </View>
      </a>
    );
  }
}

const View = styled.div`
  margin-top: 10px;
  width: 254px;
  height: 302px;
  margin-left: 10px;
  display: flex;
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Frame141 = styled.div`
  width: 245px;
  height: 283px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
`;

const Frame130 = styled.div`
  height: 253px;
  margin-top: -3px;
  display: flex;
  padding: 3px 0;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 245px;
`;

const OverlapGroup = styled.div`
  width: 242px;
  height: 244px;
  position: relative;
`;

const Vector = styled.img`
  position: absolute;
  width: 242px;
  height: 236px;
  top: 0;
  left: 0;
`;

const Photo20210627231123RemovebgPreview2 = styled.img`
  position: absolute;
  width: 179px;
  height: 222px;
  top: 22px;
  left: 32px;
`;

const Text10 = styled.div`
  ${ValignTextBottom}
  ${OpensansNormalBlack16px}
            margin-left: 48px;
  width: 149px;
  height: 20px;
  margin-top: 16px;
  text-align: center;
  letter-spacing: -0.08px;
`;

const Span0 = styled.span`
  ${OpensansNormalBlack16px}
  letter-spacing: -0.01px;
`;

const Span1 = styled.span`
  ${OpensansSemiBoldBlack16px}
  letter-spacing: -0.01px;
`;

const Span2 = styled.span`
  ${OpensansBoldBlack16px}
  letter-spacing: -0.01px;
`;

export default Active;
