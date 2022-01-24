/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #f84f27;
    padding: 10px;
    border-radius: 10px;
    margin: 20px auto;
  `;
  const titleStyle = css({
    color: "#ebb2f2"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>-- Emotion --</p>
      <SButton>Emotion Button</SButton>
    </div>
  );
};

console.log(css);
console.log(styled);
const SButton = styled.button`
  padding: 10px;
  color: #ff2b2f;
  border: 3px solid #aab2f4;
  border-radius: 5px;
`;
