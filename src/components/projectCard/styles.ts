import { COLORS } from "@/utils/colors"
import { CardMediaProps, TypographyProps } from "@mui/material"

export const cardMainStyle = (isSelected: boolean) => {
  return {
    borderRadius: 4,
    backgroundColor: isSelected ? COLORS.selected : "white",
    border: `2px solid ${isSelected ? COLORS.selected : "white"}`,
  }
}

export const imageStyle = {
  borderRadius: 4,
  objectFit: 'cover',
  height: '185px'
}

export const projectNameStyle = (isSelected: boolean): TypographyProps => {
  return {
    gutterBottom: true, variant: "caption",
    component: "div",
    sx: { fontSize: '1rem', fontWeight: 500, color: isSelected ? COLORS.white : COLORS.black }
  }
}

export const dateStyle = (isSelected: boolean): TypographyProps => {
  return {
    variant: "caption", sx: { color: isSelected ? COLORS.white : COLORS.black }
  }
}