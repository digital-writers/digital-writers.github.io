import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  OpensansBoldBlack16px,
  OpensansSemiBoldBlack16px,
  OpensansNormalBlack16px,
  ValignTextBottom,
} from "../../styledMixins";


class Active2 extends React.Component {
  render() {
    const { overlapGroup, photo_20210627_231128RemovebgPrevie, spanText1, spanText2, spanText3 } = this.props;

    return (
      <a href="javascript:ShowOverlay('lermontov', 'animate-appear');">
        <View>
          <Frame138>
            <Frame133>
              <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
                <Photo20210627231128RemovebgPreview2 src={photo_20210627_231128RemovebgPrevie} />
              </OverlapGroup>
            </Frame133>
            <Text11>
              <span>
                <Span01>{spanText1}</Span01>
                <Span11>{spanText2}</Span11>
                <Span21>{spanText3}</Span21>
              </span>
            </Text11>
          </Frame138>
        </View>
      </a>
    );
  }
}

const View = styled.div`
  margin-top: 10px;
  width: 254px;
  height: 302px;
  margin-left: 150px;
  display: flex;
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Frame138 = styled.div`
  width: 245px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  padding: 1px 0;
  align-items: center;
  min-height: 287px;
`;

const Frame133 = styled.div`
  height: 247px;
  display: flex;
  padding: 0 3.2px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 245px;
`;

const OverlapGroup = styled.div`
  height: 248px;
  margin-bottom: -5.25px;
  display: flex;
  padding: 5.3px 10.9px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 238px;
  background-size: 100% 100%;
`;

const Photo20210627231128RemovebgPreview2 = styled.img`
  width: 216px;
  height: 218px;
`;

const Text11 = styled.div`
  ${ValignTextBottom}
  ${OpensansNormalBlack16px}
            width: 155px;
  height: 22px;
  margin-top: 16px;
  text-align: center;
  letter-spacing: -0.08px;
`;

const Span01 = styled.span`
  ${OpensansNormalBlack16px}
  letter-spacing: -0.01px;
`;

const Span11 = styled.span`
  ${OpensansSemiBoldBlack16px}
  letter-spacing: -0.01px;
`;

const Span21 = styled.span`
  ${OpensansBoldBlack16px}
  letter-spacing: -0.01px;
`;

export default Active2;
