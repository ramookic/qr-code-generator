import { QRCodeAction, QRCodeState } from "./types";

export function useActions(dispatch: React.Dispatch<QRCodeAction>) {
  function handleData(value: QRCodeState["data"]) {
    dispatch({ type: "SET_DATA", payload: value });
  }

  function handleImage(value: QRCodeState["image"]) {
    dispatch({ type: "SET_IMAGE", payload: value });
  }

  function handleWidth(value: QRCodeState["width"]) {
    dispatch({ type: "SET_WIDTH", payload: value });
  }

  function handleHeight(value: QRCodeState["height"]) {
    dispatch({ type: "SET_HEIGHT", payload: value });
  }

  function handleMargin(value: QRCodeState["margin"]) {
    dispatch({ type: "SET_MARGIN", payload: value });
  }

  function handleDotsColor(value: QRCodeState["dotsOptions"]["color"]) {
    dispatch({ type: "SET_DOTS_COLOR", payload: value });
  }

  function handleDotsType(value: QRCodeState["dotsOptions"]["type"]) {
    dispatch({ type: "SET_DOTS_TYPE", payload: value });
  }

  function handleDotsRoundSize(value: QRCodeState["dotsOptions"]["roundSize"]) {
    dispatch({ type: "SET_DOTS_ROUNDSIZE", payload: value });
  }

  function handleCornersSquareColor(
    value: QRCodeState["cornersSquareOptions"]["color"]
  ) {
    dispatch({ type: "SET_CORNERS_SQUARE_COLOR", payload: value });
  }

  function handleCornersSquareType(
    value: QRCodeState["cornersSquareOptions"]["type"]
  ) {
    dispatch({ type: "SET_CORNERS_SQUARE_TYPE", payload: value });
  }

  function handleCornersDotColor(
    value: QRCodeState["cornersDotOptions"]["color"]
  ) {
    dispatch({ type: "SET_CORNERS_DOT_COLOR", payload: value });
  }

  function handleCornersDotType(
    value: QRCodeState["cornersDotOptions"]["type"]
  ) {
    dispatch({ type: "SET_CORNERS_DOT_TYPE", payload: value });
  }

  function handleBackgroundColor(
    value: QRCodeState["backgroundOptions"]["color"]
  ) {
    dispatch({ type: "SET_BACKGROUND_COLOR", payload: value });
  }

  function handleName(value: QRCodeState["name"]) {
    dispatch({ type: "SET_NAME", payload: value });
  }

  function handleExtension(value: QRCodeState["extension"]) {
    dispatch({ type: "SET_EXTENSION", payload: value });
  }

  function reset() {
    dispatch({ type: "RESET" });
  }

  return {
    handleData,
    handleImage,
    handleWidth,
    handleHeight,
    handleMargin,
    handleDotsColor,
    handleDotsType,
    handleDotsRoundSize,
    handleCornersSquareColor,
    handleCornersSquareType,
    handleCornersDotColor,
    handleCornersDotType,
    handleBackgroundColor,
    handleName,
    handleExtension,
    reset,
  };
}
