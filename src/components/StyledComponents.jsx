import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>-- Styled Components --</STitle>
      <SButton>Styled Components Button</SButton>
    </SContainer>
  );
};

/* 
  外部から取り込んだコンポーネントなのか
  StyleComponents用のコンポーネントなのかを判別するために
  頭文字に大文字のS をつけるなどの対策をした方が良い
*/

/*
  Styled.divという記法の後にバッククオートで囲われたSASSの記法を追加することで
  スタイルがあたったdivタグを生成できる
*/
const SContainer = styled.div`
  border: solid 2px #f84f27;
  padding: 10px;
  border-radius: 10px;
  margin: 20px auto;
`;

const STitle = styled.p`
  color: #ebb2f2;
`;

const SButton = styled.button`
  padding: 10px;
  color: #ff2b2f;
  border: 3px solid #aab2f4;
  border-radius: 5px;
`;
