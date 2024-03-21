"use client"
import { Inter } from "next/font/google"
import { createTheme } from "@mui/material"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "600", "800"],
})

export const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
    h2: {
      fontWeight: 600,
      fontSize: 24 / 16 + "rem",
      lineHeight: "133%",
      marginBottom: 10 / 16 + "rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: 20 / 16 + "rem",
      lineHeight: "140%",
      marginBottom: 10 / 16 + "rem",
    },
    body1: {
      fontSize: 18 / 16 + "rem",
      color: "#000000",
      lineHeight: "143%",
      marginBottom: "1rem",
    },
  },
  palette: {
    primary: {
      main: "#6366f1",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1700,
    },
  },
})
