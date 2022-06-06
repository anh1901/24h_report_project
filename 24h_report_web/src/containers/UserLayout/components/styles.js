import styled, { css, keyframes } from "styled-components";
import SearchIcon from "../icons/search";
import ArrowRightIcon from "../icons/arrowRight";

export const Container = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  border-radius: 50px;
  border: 2px solid #1c54fc;
  padding: 5px;
  margin-right: 5px;
  background: #f5f8fa;
  transition: all 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 40%;
      border: 1px solid #1c54fc;

      @media (min-width: 768px) {
        width: 20%;
      }
    `}
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 28px;
  line-height: 30px;
  outline: 0;
  border: 0;
  font-size: 20px;
  border-radius: 20px;
  padding: 0 20px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;

/** icons */
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const IconCommonCss = css`
  height: 1.25rem;
  width: 1.25rem;
  fill: #2f80ed;
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;

export const IconMagnifyingGlass = styled(SearchIcon)`
  ${IconCommonCss}
`;

export const IconRightArrow = styled(ArrowRightIcon)`
  ${IconCommonCss}
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    fill: #393e46;
  }
`;
