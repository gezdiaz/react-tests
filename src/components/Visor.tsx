import { TextField } from "@mui/material";
import { errorTranslate } from "../utils/utils";

interface visorProps {
  expresion: string;
  error: string | null;
}

export const Visor = ({ expresion, error }: visorProps): JSX.Element => {
  const hasError = Boolean(error);

  return (
    <TextField
      value={expresion}
      error={hasError}
      helperText={errorTranslate(error ?? "")}
    />
  );
};
