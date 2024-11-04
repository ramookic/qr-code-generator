import { QRCodeState } from "./types";

export const INITIAL_STATE: QRCodeState = {
  width: 300,
  height: 300,
  data: undefined,
  image: undefined,
  margin: 4,
  dotsOptions: {
    color: "#000000",
    type: "square",
    roundSize: false,
  },
  cornersSquareOptions: {
    color: "#000000",
    type: "square",
  },
  cornersDotOptions: {
    color: "#000000",
    type: "square",
  },
  backgroundOptions: {
    color: "#ffffff",
  },
  name: "QRCode",
  extension: "png",
};
