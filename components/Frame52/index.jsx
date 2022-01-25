import React from "react";
import styled from "styled-components";


class Frame52 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Frame521 className={`frame-52 ${className || ""}`}>
        <Ellipse12 className="ellipse-12"></Ellipse12>
      </Frame521>
    );
  }
}

const Frame521 = styled.div`
  margin-top: 5.7px;
  width: 14.650824546813965px;
  height: 14.650824546813965px;
  margin-left: 4.6px;
  display: flex;

  &.frame-52.frame-53-1 {
    margin-left: 4.9px;
  }

  &.frame-52.frame-54 {
    margin-left: 4.9px;
  }

  &.frame-52.frame-53-2 {
    margin-left: 4.9px;
  }

  &.frame-52.frame-54-1 {
    margin-left: 4.9px;
  }
`;

const Ellipse12 = styled.div`
  margin-top: 4.9px;
  width: 4.883607864379883px;
  height: 4.883607864379883px;
  margin-left: 4.9px;
  background-color: var(--x--250);
  border-radius: 2.44px;
`;

export default Frame52;
