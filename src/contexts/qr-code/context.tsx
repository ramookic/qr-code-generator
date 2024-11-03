import { createContext, useContext, useReducer } from "react";
import { QRCodeAction, QRCodeState } from "./types";
import { qrCodeReducer } from "./reducer";
import { INITIAL_STATE } from "./config";
import { useActions } from "./actions";

interface QRCodeContextType {
  state: QRCodeState;
  action: React.Dispatch<QRCodeAction>;
}

const QRCodeContext = createContext<QRCodeContextType | undefined>(undefined);

export const QRCodeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(qrCodeReducer, INITIAL_STATE);
  const contextValues = useActions(dispatch);

  return (
    <QRCodeContext.Provider
      value={{ state, action: dispatch, ...contextValues }}
    >
      {children}
    </QRCodeContext.Provider>
  );
};

// eslint-disable-next-line
export const useQRCode = () => {
  const context = useContext(QRCodeContext);

  if (context === undefined) {
    throw new Error("QRCodeConext used outside QRCodeProvider");
  }

  return context;
};
