import React from "react";
import Frame52 from "../Frame52";
import styled from "styled-components";


class Frame53 extends React.Component {
  render() {
    const { frame521Props, frame522Props } = this.props;

    return (
      <Frame531>
        <Frame52 />
        <Frame52 className={frame521Props.className} />
        <Frame52 className={frame522Props.className} />
      </Frame531>
    );
  }
}

const Frame531 = styled.div`
  margin-left: 152px;
  width: 63px;
  height: 26px;
  position: relative;
  margin-top: 24px;
  display: flex;
`;

const Frame532 = styled.div`
  margin-left: 152px;
  width: 63px;
  height: 26px;
  position: relative;
  margin-top: 24px;
  display: flex;
`;

export default Frame53;
