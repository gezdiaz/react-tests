import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { ButtonGrid } from "./components/ButtonGrid";
import { Visor } from "./components/Visor";

const Calculator = (): JSX.Element => {
  const [currentExpresion, setExpresion] = useState("");
  const [error, setError] = useState<string | null>(null);

  const clearScreen = () => {
    console.log("BORRAR");
    setExpresion("");
    setError(null);
  };

  return (
    <Stack width="280px" spacing={2} padding={2} margin="auto">
      <Visor expresion={currentExpresion} error={error} />
      <ButtonGrid
        currentExpresion={currentExpresion}
        setExpresion={setExpresion}
        setError={setError}
      />
      <Button onClick={clearScreen} variant="contained">
        Borrar
      </Button>
    </Stack>
  );
};

export default Calculator;
