import { Container, ContainerProps } from "@mui/material"

export const SContainer = ({
  children,
  className,
  sx,
  ...rest
}: ContainerProps) => {
  return (
    <Container
      className={className}
      maxWidth={false}
      sx={{
        width: {
          xl: "1680px",
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Container>
  )
}
