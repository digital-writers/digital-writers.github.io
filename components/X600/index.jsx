import React from "react";
import styled from "styled-components";
import { ValignTextBottom } from "../../styledMixins";


class X600 extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <View>
        <Frame115>
          <TextLabel>{children}</TextLabel>
        </Frame115>
      </View>
    );
  }
}

const View = styled.div`
  width: 142px;
  margin-left: 18px;
  display: flex;
  border-radius: 8px;
`;

const Frame115 = styled.div`
  width: 142px;
  height: 26px;
  display: flex;
`;

const TextLabel = styled.div`
  ${ValignTextBottom}
  margin-top: -1px;
  width: 142px;
  height: 27px;
  font-family: var(--font-family-open_sans);
  font-weight: 600;
  color: var(--x23qbfd);
  font-size: 20px;
  text-align: center;
  letter-spacing: -0.1px;
`;

export default X600;
