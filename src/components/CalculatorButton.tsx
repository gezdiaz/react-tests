import { Button } from "@mui/material";

interface numberProps {
  label: string;
  action: (number: string) => void;
  variant?: "outlined" | "contained" | "text";
}

export const CalculatorButton = ({
  label,
  action,
  variant = "outlined",
}: numberProps): JSX.Element => {
  return (
    <Button
      variant={variant}
      style={{ width: "100%" }}
      onClick={() => action(label)}
    >
      {label}
    </Button>
  );
};
