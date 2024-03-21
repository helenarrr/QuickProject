import Link from "next/link"
import { SContainer } from "@/components/UI/Container/SContainer"
import Box from "@mui/material/Box"

export const Footer = () => {
  return (
    <Box
      sx={{
        background: "var(--neutral-100)",
        paddingTop: "18px",
        paddingBottom: "16px",
      }}
    >
      <SContainer>
        <Link href="/">
          <img src="/Footer.svg" alt="footer logo" />
        </Link>
      </SContainer>
    </Box>
  )
}
