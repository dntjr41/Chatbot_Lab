import React from "react";
import styled from "@emotion/styled";
import { stubFalse } from "lodash";

const Grid = (props) => {
  //Border category
  const { B_left, B_right, Border, B_radius, B_bottom, B_top } = props;
  const {
    B_bottom_left_radius,
    B_bottom_right_radius,
    B_top_left_radius,
    B_top_right_radius,
  } = props;

  //box category
  const { box_shadow, box_sizing } = props;

  //Background category
  const { BG_c } = props;

  //flex category
  const {
    is_flex,
    flex_direction,
    flex_wrap,
    justify_content,
    align_items,
    align_content,
    vertical_align,
  } = props;

  //size, position category
  const {
    width,
    height,
    max_width,
    min_width,
    max_height,
    min_height,
    margin,
    margin_left,
    margin_right,
    margin_top,
    margin_bottom,
    padding,
    padding_left,
    gap,
    row_gap,
    column_gap,
    position,
    top,
    bottom,
    right,
    left,
    z_index,
    cursor,
    text_align,
  } = props;

  //event category
  const { _onClick } = props;

  //children category
  const { children } = props;

  const styles = {
    B_left,
    B_right,
    B_bottom,
    B_top,
    B_radius,
    B_bottom_left_radius,
    B_bottom_right_radius,
    B_top_left_radius,
    B_top_right_radius,
    Border,
    BG_c,
    box_shadow,
    box_sizing,
    text_align,
    is_flex,
    flex_direction,
    justify_content,
    align_content,
    align_items,
    flex_wrap,
    vertical_align,

    width,
    height,
    max_width,
    min_width,
    max_height,
    min_height,

    margin,
    margin_left,
    margin_right,
    margin_top,
    margin_bottom,
    padding,
    padding_left,
    gap,
    row_gap,
    column_gap,
    position,
    top,
    bottom,
    right,
    left,
    z_index,
    cursor,
  };

  return (
    <React.Fragment>
      <GridBox onClick={_onClick} {...styles}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

//default Props value
Grid.defaultProps = {
  children: null,

  is_flex: false,
  flex_direction: "row",
  flex_wrap: "nowrap",
  align_items: "center",
  justify_content: null,
  align_content: null,

  box_shadow: null,
  box_sizing: true,

  BG_c: false,

  Border: false,
  B_bottom_left_radius: false,
  B_bottom_right_radius: false,
  B_top_left_radius: false,
  B_top_right_radius: false,

  width: null,
  height: null,
  max_width: null,
  min_width: null,
  max_height: null,
  min_height: null,

  padding: false,
  padding_left: false,
  margin: false,
  margin_left: null,
  margin_right: null,
  margin_top: null,
  margin_bottom: null,
  gap: false,
  row_gap: false,
  column_gap: false,
  vertical_align: false,
  position: null,
  top: null,
  bottom: null,
  right: null,
  left: null,
  z_index: null,
  _onClick: null,
  cursor: "auto",
};

const GridBox = styled.div`
  white-space: normal;
  //flex
  ${(props) => (props.is_flex ? `display : flex;` : "")}
  align-items : ${(props) => props.align_items};
  justify-content: ${(props) => props.justify_content};
  align-content: ${(props) => props.align_content};
  flex-direction: ${(props) => props.flex_direction};
  flex-wrap: ${(props) => props.flex_wrap};
  box-shadow: ${(props) => props.box_shadow};
  //size, position
  text-align: ${(props) => props.text_align};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${(props) => props.max_width};
  min-width: ${(props) => props.min_width};
  max-height: ${(props) => props.max_height};
  min-height: ${(props) => props.min_height};
  padding: ${(props) => props.padding};
  padding-left: ${(props) => props.padding_left};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.margin_left};
  margin-right: ${(props) => props.margin_right};
  margin-top: ${(props) => props.margin_top};
  margin-bottom: ${(props) => props.margin_bottom};
  gap: ${(props) => props.gap};
  row-gap: ${(props) => props.row_gap};
  column-gap: ${(props) => props.column_gap};
  vertical-align: ${(props) => props.vertical_align};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  z-index: ${(props) => props.z_index};
  //border
  border: ${(props) => props.Border};
  border-left: ${(props) => props.B_left};
  border-right: ${(props) => props.B_right};
  border-top: ${(props) => props.B_top};
  border-bottom: ${(props) => props.B_bottom};
  border-radius: ${(props) => props.B_radius};
  border-bottom-left-radius: ${(props) => props.B_bottom_left_radius};
  border-bottom-right-radius: ${(props) => props.B_bottom_right_radius};
  border-top-left-radius: ${(props) => props.B_top_left_radius};
  border-top-right-radius: ${(props) => props.B_top_right_radius};
  //background
  background-color: ${(props) => props.BG_c};
  box-sizing: ${(props) => props.box_sizing};
  ${(props) => (props.box_sizing ? "box-sizing :border-box" : "")};
  cursor: ${(props) => props.cursor};
`;

export default Grid;
