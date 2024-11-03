import { INITIAL_STATE } from "./config";
import { QRCodeAction, QRCodeState } from "./types";

export function qrCodeReducer(
  state: QRCodeState,
  action: QRCodeAction
): QRCodeState {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_IMAGE":
      return { ...state, image: action.payload };
    case "SET_WIDTH":
      return { ...state, width: action.payload };
    case "SET_HEIGHT":
      return { ...state, height: action.payload };
    case "SET_MARGIN":
      return { ...state, margin: action.payload };
    case "SET_DOTS_COLOR":
      return {
        ...state,
        dotsOptions: { ...state.dotsOptions, color: action.payload },
      };
    case "SET_DOTS_TYPE":
      return {
        ...state,
        dotsOptions: { ...state.dotsOptions, type: action.payload },
      };
    case "SET_DOTS_ROUNDSIZE":
      return {
        ...state,
        dotsOptions: { ...state.dotsOptions, roundSize: action.payload },
      };
    case "SET_CORNERS_SQUARE_COLOR":
      return {
        ...state,
        cornersSquareOptions: {
          ...state.cornersSquareOptions,
          color: action.payload,
        },
      };
    case "SET_CORNERS_SQUARE_TYPE":
      return {
        ...state,
        cornersSquareOptions: {
          ...state.cornersSquareOptions,
          type: action.payload,
        },
      };
    case "SET_CORNERS_DOT_COLOR":
      return {
        ...state,
        cornersDotOptions: {
          ...state.cornersDotOptions,
          color: action.payload,
        },
      };
    case "SET_CORNERS_DOT_TYPE":
      return {
        ...state,
        cornersDotOptions: {
          ...state.cornersDotOptions,
          type: action.payload,
        },
      };
    case "SET_BACKGROUND_COLOR":
      return {
        ...state,
        backgroundOptions: {
          ...state.backgroundOptions,
          color: action.payload,
        },
      };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EXTENSION":
      return { ...state, extension: action.payload };
    case "RESET":
      return INITIAL_STATE;
    default:
      return state;
  }
}
