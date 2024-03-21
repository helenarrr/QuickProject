import Button, { ButtonProps } from "@mui/material/Button"

export const SButton = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <Button
      className={className}
      sx={{
        backgroundColor: "var(--brand-500)",
        fontSize: "1rem",
        fontWeight: 600,
        color: "var(--neutral-100)",
        textTransform: "capitalize",
        lineHeight: "150%",
        padding: "10px 16px",
        "&:hover": {
          backgroundColor: "var(--brand-400)",
        },
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}
