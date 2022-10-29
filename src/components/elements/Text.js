import React from "react";
import styled from "@emotion/styled";

const Text = (props) => {
  const {
    F_size,
    F_color,
    F_weight,
    F_style,
    F_decoration,
    F_align,
    F_family,
  } = props;

  const { cursor } = props;

  const {
    margin,
    margin_left,
    margin_top,
    margin_bottom,
    padding,
    padding_left,
    width,
  } = props;

  const {
    is_flex,
    flex_direction,
    flex_wrap,
    align_items,
    justify_content,
    vertical_align,
  } = props;

  const { Border, B_radius, B_bottom } = props;

  const { _onClick, children } = props;
  const styles = {
    F_size,
    F_color,
    F_weight,
    F_style,
    F_decoration,
    F_align,
    F_family,

    is_flex,
    flex_direction,
    flex_wrap,
    align_items,
    justify_content,
    vertical_align,

    Border,
    B_radius,
    B_bottom,

    margin,
    margin_left,
    margin_top,
    margin_bottom,
    padding,
    padding_left,
    width,

    cursor,
  };

  return (
    <P onClick={_onClick} {...styles}>
      {children}
    </P>
  );
};

Text.defaultProps = {
  F_size: "14px",
  F_color: "#222831",
  F_weight: false,
  F_style: null,
  F_decoration: null,
  F_align: null,
  F_family: "GmarketSansLight",

  is_flex: false,
  flex_direction: "row",
  flex_wrap: "wrap",
  align_items: "center",
  justify_content: null,
  vertical_align: false,

  cursor: null,

  Border: null,
  B_radius: null,
  B_bottom: null,

  margin: null,
  margin_left: null,
  margin_top: null,
  margin_bottom: null,
  padding_left: null,
  padding: null,
  width: "auto",

  _onClick: null,
};

const P = styled.div`
  font-size: ${(props) => props.F_size};
  color: ${(props) => props.F_color};
  font-weight: ${(props) => props.F_weight};
  font-style: ${(props) => props.F_style};
  font-family: ${(props) => props.F_family};
  text-decoration: ${(props) => props.F_decoration};
  text-align: ${(props) => props.F_align};
  ${(props) => (props.is_flex ? `display : flex;` : "")};
  align-items: ${(props) => props.align_items};
  justify-content: ${(props) => props.justify_content};
  flex-direction: ${(props) => props.flex_direction};
  flex-wrap: ${(props) => props.flex_wrap};
  vertical-align: ${(props) => props.vertical_align};
  border: ${(props) => props.Border};
  border-radius: ${(props) => props.B_radius};
  border-bottom: ${(props) => props.B_bottom};
  padding: ${(props) => props.padding};
  padding-left: ${(props) => props.padding_left};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.margin_left};
  margin-top: ${(props) => props.margin_top};
  margin-bottom: ${(props) => props.margin_bottom};
  width: ${(props) => props.width};

  cursor: ${(props) => props.cursor};
  white-space: pre-wrap;
  word-break: break-all;
`;

export default Text;
