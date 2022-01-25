import React from "react";
import styled from "styled-components";
import {
  OpensansBoldBlack16px,
  OpensansSemiBoldBlack16px,
  OpensansNormalBlack16px,
  ValignTextBottom,
} from "../../styledMixins";


class Inactive extends React.Component {
  render() {
    const { photo_20210627_231132RemovebgPrevie, spanText1, spanText2, spanText3 } = this.props;

    return (
      <View>
        <Frame127>
          <Frame126>
            <OverlapGroup>
              <Vector src="/img/vector-2@2x.png" />
              <Photo20210627231132RemovebgPreview2 src={photo_20210627_231132RemovebgPrevie} />
            </OverlapGroup>
          </Frame126>
          <Text12>
            <span>
              <Span02>{spanText1}</Span02>
              <Span12>{spanText2}</Span12>
              <Span22>{spanText3}</Span22>
            </span>
          </Text12>
        </Frame127>
      </View>
    );
  }
}

const View = styled.div`
  margin-top: 10px;
  width: 254px;
  height: 302px;
  margin-left: 10px;
  display: flex;
  opacity: 0.5;
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Frame127 = styled.div`
  margin-top: 10px;
  width: 237px;
  height: 276px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
`;

const Frame126 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 237px;
`;

const OverlapGroup = styled.div`
  width: 237px;
  height: 238px;
  position: relative;
`;

const Vector = styled.img`
  position: absolute;
  width: 237px;
  height: 228px;
  top: 10px;
  left: 0;
`;

const Photo20210627231132RemovebgPreview2 = styled.img`
  position: absolute;
  width: 187px;
  height: 237px;
  top: 0;
  left: 29px;
`;

const Text12 = styled.div`
  ${ValignTextBottom}
  ${OpensansNormalBlack16px}
            margin-left: 33px;
  width: 171px;
  height: 22px;
  margin-top: 16px;
  text-align: center;
  letter-spacing: -0.08px;
`;

const Span02 = styled.span`
  ${OpensansNormalBlack16px}
  letter-spacing: -0.01px;
`;

const Span12 = styled.span`
  ${OpensansSemiBoldBlack16px}
  letter-spacing: -0.01px;
`;

const Span22 = styled.span`
  ${OpensansBoldBlack16px}
  letter-spacing: -0.01px;
`;

export default Inactive;
