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

export const SocialIconStyle = styled.div`
ul {
  list-style: none;
}

.example-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 0.5rem;
}
.example-2 .icon-content {
  margin: 0 10px;
  position: relative;
}
.example-2 .icon-content .tooltip {
  position: absolute;
  top: 20px;
  left: 100%;
  transform: translateX(50%);
  color: #fff;
  padding: 6px 10px;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  font-size: 14px;
  transition: all 0.3s ease;
}
.example-2 .icon-content:hover .tooltip {
  opacity: 1;
  visibility: visible;
  top: 5px;
}
.example-2 .icon-content a {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: ${COLORS.dark.main};
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover {
  box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
}
.example-2 .icon-content a svg {
  position: relative;
  z-index: 1;
  width: 30px;
  height: 30px;
}
.example-2 .icon-content a:hover {
  color: white;
}
.example-2 .icon-content a .filled {
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #000;
  transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover .filled {
  height: 100%;
}

.example-2 .icon-content a[data-social="linkedin"] .filled,
.example-2 .icon-content a[data-social="linkedin"] ~ .tooltip {
  background-color: #0274b3;
}
.example-2 .icon-content a[data-social="facebook"] .filled,
.example-2 .icon-content a[data-social="facebook"] ~ .tooltip {
  background-color: #3b5998;
}

.example-2 .icon-content a[data-social="github"] .filled,
.example-2 .icon-content a[data-social="github"] ~ .tooltip {
  background-color:${COLORS.dark.main};
}
.example-2 .icon-content a[data-social="instagram"] .filled,
.example-2 .icon-content a[data-social="instagram"] ~ .tooltip {
  background: linear-gradient(
    45deg,
    #405de6,
    #5b51db,
    #b33ab4,
    #c135b4,
    #e1306c,
    #fd1f1f
  );
}
`;