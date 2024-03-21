import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

type PositionProps = { position: string }
const Position = ({ position }: PositionProps) => {
  return (
    <Box
      sx={{
        borderRadius: "26px",
        background: "var(--neutral-100)",
        padding: "8px 16px 8px 14px",
        color: "var(--neutral-700)",
        fontSize: 14 / 16 + "rem",
        lineHeight: "143%",
        fontWeight: 600,
        marginRight: "10px",
        marginBottom: "10px",
      }}
    >
      {position}
    </Box>
  )
}
export const ProjectCard = () => {
  return (
    <Box
      sx={{
        padding: 20 / 16 + "rem",
        background: "var(--brand-100)",
        borderRadius: "20px",
      }}
    >
      <Typography variant="h3" component="h3">
        Название проекта
      </Typography>
      <Typography variant="body1" component="p">
        Наш проект представляет собой инновационную платформу для обучения детей
        и подростков с использованием интерактивных игр и заданий. Мы объединяем
        новейшие технологии в области образования с уникальными методиками,
        разработанными специально для развития умственных способностей учащихся.
        Мы уверены, что наше инновационное решение поможет детям получить
        качественное образование и развить свой потенциал в самых различных
        областях знаний.
      </Typography>
      <Typography variant="h3" component="h3">
        Нужен:
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Position position="Дизайнер" />
        <Position position="QA" />
        <Position position="PM" />
        <Position position="Фронтенд" />
        <Position position="Бекенд" />
      </Box>
    </Box>
  )
}
