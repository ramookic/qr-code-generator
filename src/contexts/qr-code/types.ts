export type QRCodeState = {
  width: number;
  height: number;
  data: string | undefined;
  image: string | undefined;
  margin: number;
  dotsOptions: {
    color: string;
    type:
      | "rounded"
      | "dots"
      | "classy"
      | "classy-rounded"
      | "square"
      | "extra-rounded";
    roundSize: boolean;
  };
  cornersSquareOptions: {
    color: string;
    type: "dot" | "square" | "extra-rounded";
  };
  cornersDotOptions: {
    color: string;
    type: "dot" | "square";
  };
  backgroundOptions: {
    color: string;
  };
  name: string;
  extension: "png" | "jpeg" | "svg" | "webp";
};

export type QRCodeAction =
  | { type: "SET_DATA"; payload: QRCodeState["data"] }
  | { type: "SET_IMAGE"; payload: QRCodeState["image"] }
  | { type: "SET_WIDTH"; payload: QRCodeState["width"] }
  | { type: "SET_HEIGHT"; payload: QRCodeState["height"] }
  | { type: "SET_MARGIN"; payload: QRCodeState["margin"] }
  | { type: "SET_DOTS_COLOR"; payload: QRCodeState["dotsOptions"]["color"] }
  | { type: "SET_DOTS_TYPE"; payload: QRCodeState["dotsOptions"]["type"] }
  | {
      type: "SET_DOTS_ROUNDSIZE";
      payload: QRCodeState["dotsOptions"]["roundSize"];
    }
  | {
      type: "SET_CORNERS_SQUARE_COLOR";
      payload: QRCodeState["cornersSquareOptions"]["color"];
    }
  | {
      type: "SET_CORNERS_SQUARE_TYPE";
      payload: QRCodeState["cornersSquareOptions"]["type"];
    }
  | {
      type: "SET_CORNERS_DOT_COLOR";
      payload: QRCodeState["cornersDotOptions"]["color"];
    }
  | {
      type: "SET_CORNERS_DOT_TYPE";
      payload: QRCodeState["cornersDotOptions"]["type"];
    }
  | {
      type: "SET_BACKGROUND_COLOR";
      payload: QRCodeState["backgroundOptions"]["color"];
    }
  | { type: "SET_NAME"; payload: QRCodeState["name"] }
  | { type: "SET_EXTENSION"; payload: QRCodeState["extension"] }
  | { type: "RESET" };
