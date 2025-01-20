import { COLORS } from "@muc/constants";
import styled from "styled-components";

export const ServiceCardStyle = {
  bgcolor: COLORS.dark.darkLight,
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "2px",
  width: { md: 400 },
  my: 2,
  "&:hover": {
    bgcolor: COLORS.primary.main,
    cursor: "pointer",
    transition: "0.5s",
  },
};

export const ProjectCardStyle = styled.div`
  .card {
    position: relative;
    height: 350px;
    border-radius: 3px;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(250, 190, 55, 0.9);
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover .card__content {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }

  .card__title {
    margin: 0;
    color: ${COLORS.white.main};
  }

  .card__description {
    margin: 10px 0 0;
    color: ${COLORS.dark.main};
    line-height: 1.4;
  }

  .card:hover svg {
    scale: 0;
    transform: rotate(-45deg);
  }
`;

export const AnalyticCardStyle = {
  width: { md: 250 },
  bgcolor: COLORS.dark.darkLight,
  boxShadow:`0px 2px 8px ${COLORS.dark.main}`,
  p: "22px",
  height: 150,
  textAlign: "center",
  borderRadius: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "&:hover":{
    mt:-2,
    transition:'0.2s'
  }
};
