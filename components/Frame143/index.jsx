import React from "react";
import styled from "styled-components";
import { OpensansLightBlack147px, OpensansBoldBlack245px } from "../../styledMixins";


class Frame143 extends React.Component {
  render() {
    const { text1, text2 } = this.props;

    return (
      <Frame1431>
        <Text1>{text1}</Text1>
        <Text2>{text2}</Text2>
      </Frame1431>
    );
  }
}

const Frame1431 = styled.div`
  width: 157px;
  height: 51px;
  display: flex;
  flex-direction: column;
`;

const Text1 = styled.div`
  ${OpensansLightBlack147px}
  width: 157.43209838867188px;
  height: 19.919979095458984px;
  letter-spacing: -0.07px;
`;

const Text2 = styled.div`
  ${OpensansBoldBlack245px}
  width: 150.98594665527344px;
  height: 26.536924362182617px;
  margin-top: 3.9px;
  letter-spacing: -0.12px;
  line-height: 20.1px;
`;

const Frame1432 = styled.div`
  width: 157px;
  height: 51px;
  display: flex;
  flex-direction: column;
`;

const Text17 = styled.div`
  ${OpensansLightBlack147px}
  width: 157.43209838867188px;
  height: 19.919979095458984px;
  letter-spacing: -0.07px;
`;

const Text18 = styled.div`
  ${OpensansBoldBlack245px}
  width: 150.98594665527344px;
  height: 26.536924362182617px;
  margin-top: 3.9px;
  letter-spacing: -0.12px;
  line-height: 20.1px;
`;

export default Frame143;
