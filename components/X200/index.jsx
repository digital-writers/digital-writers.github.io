import React from "react";
import styled from "styled-components";
import { OpensansSemiBoldHintOfRed10px, ValignTextBottom } from "../../styledMixins";


class X200 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <View className={`view-15 ${className || ""}`}>
        <TextLabel className="text_label-4">{children}</TextLabel>
      </View>
    );
  }
}

const View = styled.div`
  margin-left: 80.5px;
  width: 135px;
  height: 32px;
  margin-top: 19.4px;
  display: flex;
  background-color: var(--pumice);
  border-radius: 5px;
  box-shadow: 0px 1.25px 5px #0000001a;
`;

const TextLabel = styled.div`
  ${ValignTextBottom}
  ${OpensansSemiBoldHintOfRed10px}
            margin-top: 9px;
  width: 94px;
  height: 14px;
  margin-left: 20.5px;
  text-align: center;
  letter-spacing: -0.05px;
`;

const TextLabel1 = styled.div`
  ${ValignTextBottom}
  ${OpensansSemiBoldHintOfRed10px}
            
            
           .view-15.view-16  & {
    width: 80px;
    margin-left: 27.5px;
  }
`;

export default X200;
