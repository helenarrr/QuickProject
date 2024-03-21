import Button, { ButtonProps } from "@mui/material/Button"

export const SButtonLight = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <Button
      className={className}
      sx={{
        backgroundColor: "var(--neutral-100)",
        fontSize: "1rem",
        fontWeight: 600,
        color: "var(--neutral-900)",
        textTransform: "none",
        lineHeight: "150%",
        padding: "10px 16px",
        "&:hover": {
          backgroundColor: "var(--neutral-200)",
        },
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}
