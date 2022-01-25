import React from "react";
import styled from "styled-components";
import {
  OpensansBoldBlack16px,
  OpensansSemiBoldBlack16px,
  OpensansNormalBlack16px,
  ValignTextBottom,
} from "../../styledMixins";


class Inactive2 extends React.Component {
  render() {
    const { frame128, photo_20210627_231139RemovebgPrevie, spanText1, spanText2, spanText3 } = this.props;

    return (
      <View>
        <Frame135>
          <Frame128 style={{ backgroundImage: `url(${frame128})` }}>
            <Photo20210627231139RemovebgPreview1 src={photo_20210627_231139RemovebgPrevie} />
          </Frame128>
          <Text13>
            <span>
              <Span03>{spanText1}</Span03>
              <Span13>{spanText2}</Span13>
              <Span23>{spanText3}</Span23>
            </span>
          </Text13>
        </Frame135>
      </View>
    );
  }
}

const View = styled.div`
  margin-top: 10px;
  width: 254px;
  height: 302px;
  margin-left: 150px;
  display: flex;
  opacity: 0.5;
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Frame135 = styled.div`
  width: 250px;
  height: 286px;
  display: flex;
  flex-direction: column;
`;

const Frame128 = styled.div`
  width: 250px;
  height: 247px;
  margin-top: 0.5px;
  display: flex;
  background-size: 100% 100%;
`;

const Photo20210627231139RemovebgPreview1 = styled.img`
  margin-top: 32px;
  width: 214px;
  height: 215px;
  margin-left: 20px;
`;

const Text13 = styled.div`
  ${ValignTextBottom}
  ${OpensansNormalBlack16px}
            margin-left: 75.5px;
  width: 99px;
  height: 22px;
  margin-top: 16px;
  text-align: center;
  letter-spacing: -0.08px;
`;

const Span03 = styled.span`
  ${OpensansNormalBlack16px}
  letter-spacing: -0.01px;
`;

const Span13 = styled.span`
  ${OpensansSemiBoldBlack16px}
  letter-spacing: -0.01px;
`;

const Span23 = styled.span`
  ${OpensansBoldBlack16px}
  letter-spacing: -0.01px;
`;

export default Inactive2;
