import { COLORS } from "@muc/constants";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  a {
    text-decoration: none;
  }
  .menu__link {
    color: ${COLORS.white.main};
    line-height: 2;
    position: relative;
  }

  .menu__link::before {
    content: "";
    width: 0;
    height: 3px;
    border-radius: 5px;
    background-color: ${COLORS.primary.main};
    position: absolute;
    bottom: -0.25rem;
    left: 50%;
    transition: width 0.4s, left 0.4s;
  }

  .menu__link:hover::before {
    width: 100%;
    left: 0;
  }
`;
