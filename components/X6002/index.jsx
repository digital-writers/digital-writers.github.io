import React from "react";
import styled from "styled-components";
import { ValignTextBottom } from "../../styledMixins";


class X6002 extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <View className="animate-enter" show-on-scroll>
        <Frame116>
          <TextLabel>{children}</TextLabel>
        </Frame116>
      </View>
    );
  }
}

const View = styled.div`
  margin-left: 451px;
  width: 539px;
  height: 54px;
  margin-top: 130px;
  background-color: var(--pumice);
  border-radius: 8px;
  box-shadow: 0px 1px 4px #0000001a;
  opacity: 0;

  &.animate-enter {
    animation: animate-enter-frames 0.5s ease-in-out 0.2s 1 normal forwards;
    opacity: 0;
  }
`;

const Frame116 = styled.div`
  margin-top: 13.5px;
  width: 433px;
  margin-left: 53px;
  display: flex;
`;

const TextLabel = styled.div`
  ${ValignTextBottom}
  width: 433px;
  height: 27px;
  font-family: var(--font-family-open_sans);
  font-weight: 600;
  color: var(--kxk1og);
  font-size: 20px;
  text-align: center;
  letter-spacing: -0.1px;
`;

export default X6002;
