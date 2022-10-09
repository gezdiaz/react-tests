import { Grid } from "@mui/material";
import { CalculatorButton } from "./CalculatorButton";
import mexp from "math-expression-evaluator";

interface gridTypes {
  currentExpresion: string;
  setExpresion: (exp: string) => void;
  setError: (err: string | null) => void;
}

interface buttonGridDef {
  label: string;
  action: (lablel: string) => void;
  buttonVariant?: "outlined" | "contained" | "text";
}

export const ButtonGrid = ({
  currentExpresion,
  setExpresion,
  setError,
}: gridTypes): JSX.Element => {
  const numberAction = (number: string) => {
    setError(null);
    setExpresion(currentExpresion + number);
  };

  const operationAction = (op: string) => {
    setError(null);
    setExpresion(currentExpresion + " " + op + " ");
  };

  const commaAction = (comma: string) => {
    setError(null);
    setExpresion(currentExpresion + comma);
  };

  const equalsAction = (equal: string) => {
    setError(null);
    try {
      const dottedExpresion = currentExpresion.replace(",", ".");
      const value = Number.parseFloat(mexp.eval(dottedExpresion));
      console.log("result", { value });
      if (!isFinite(value)) {
        setExpresion("");
        setError("Resultado indefinido");
        return;
      }
      const formattedValue = value.toString().replace(".", ",");
      setExpresion(formattedValue);
    } catch (e) {
      const errorMessage = (e as Error).message;
      setError(errorMessage);
    }
  };

  const buttonGrid: buttonGridDef[] = [
    {
      label: "1",
      action: numberAction,
    },
    {
      label: "2",
      action: numberAction,
    },
    {
      label: "3",
      action: numberAction,
    },
    {
      label: "+",
      action: operationAction,
      buttonVariant: "contained",
    },
    {
      label: "4",
      action: numberAction,
    },
    {
      label: "5",
      action: numberAction,
    },
    {
      label: "6",
      action: numberAction,
    },
    {
      label: "-",
      action: operationAction,
      buttonVariant: "contained",
    },
    {
      label: "7",
      action: numberAction,
    },
    {
      label: "8",
      action: numberAction,
    },
    {
      label: "9",
      action: numberAction,
    },
    {
      label: "*",
      action: operationAction,
      buttonVariant: "contained",
    },
    {
      label: ",",
      action: commaAction,
    },
    {
      label: "0",
      action: numberAction,
    },
    {
      label: "=",
      action: equalsAction,
      buttonVariant: "contained",
    },
    {
      label: "/",
      action: operationAction,
      buttonVariant: "contained",
    },
  ];

  return (
    <Grid container columns={4} width={"100%"}>
      {buttonGrid.map(({ label, action, buttonVariant = "outlined" }) => (
        <Grid item xs={1} padding={1}>
          <CalculatorButton
            label={label}
            action={action}
            variant={buttonVariant}
          />
        </Grid>
      ))}
    </Grid>
  );
};
