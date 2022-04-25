import { StyledLink } from "../../css/index"
import { LinkToogleStyle } from "./style"

export default function LinkToogle({ register, path }) {
  return (
    <StyledLink to={path}>
      <LinkToogleStyle>
        {register ?  "Ja possuo cadastro" : "Não possuo cadastro" }
      </LinkToogleStyle>
    </StyledLink>

  )
}