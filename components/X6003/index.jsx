import React from "react";
import styled from "styled-components";
import { OpensansSemiBoldHintOfRed20px, ValignTextBottom } from "../../styledMixins";


class X6003 extends React.Component {
  render() {
    const { text_Label, className } = this.props;

    return (
      <View className={`view-11 ${className || ""}`}>
        <Frame116 className="frame-116-1">
          <TextLabel className="text_label-3">{text_Label}</TextLabel>
          <Image className="image-2" src="/img/------@2x.png" />
        </Frame116>
      </View>
    );
  }
}

const View = styled.div`
  width: 332px;
  height: 60px;
  align-self: center;
  display: flex;
  background-color: var(--pumice);
  border-radius: 8px;
  box-shadow: 0px 1px 4px #0000001a;

  &.view-11.view-12 {
    width: 417px;
    margin-top: 147px;
    margin-left: 1px;
  }

  &.view-11.view-13 {
    width: 458px;
    margin-top: 155px;
    align-self: unset;
  }
`;

const Frame116 = styled.div`
  margin-top: 16.5px;
  width: 251px;
  margin-left: 40.5px;
  display: flex;
`;

const TextLabel = styled.div`
  ${ValignTextBottom}
  ${OpensansSemiBoldHintOfRed20px}
            width: 217px;
  height: 27px;
  text-align: center;
  letter-spacing: -0.1px;
`;

const Image = styled.img`
  margin-top: 3px;
  width: 24px;
  height: 24px;
  margin-left: 10px;
`;

const Frame1161 = styled.div`
  .view-11.view-12 & {
    width: 354px;
    margin-left: 31.5px;
  }
`;

const TextLabel1 = styled.div`
  ${ValignTextBottom}
  ${OpensansSemiBoldHintOfRed20px}
            
            
           .view-11.view-12  & {
    width: 320px;
  }
`;

const Frame1162 = styled.div`
  .view-11.view-13 & {
    width: 397px;
    margin-left: 30.5px;
  }
`;

const TextLabel2 = styled.div`
  ${ValignTextBottom}
  ${OpensansSemiBoldHintOfRed20px}
            
            
           .view-11.view-13  & {
    width: 363px;
  }
`;

export default X6003;
