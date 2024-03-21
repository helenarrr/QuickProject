import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Link from "next/link"
import { SButton } from "@/components/UI/Buttons/SButton"

export const Header = () => {
  return (
    <AppBar
      sx={{
        background: "var(--neutral-100)",
        position: "sticky",
        top: 0,
        padding: "22px 0",
        marginBottom: 40 / 16 + "rem",
      }}
    >
      <Toolbar
        className="container"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link href="/">
          <img src="/Header.svg" alt="логотип" />
        </Link>

        <SButton>Войти</SButton>
      </Toolbar>
    </AppBar>
  )
}
