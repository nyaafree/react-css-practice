export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">-- Styled Jsx --</p>
        <button className="button">Styled Jsx Button</button>
      </div>
      {/* StyledJsxを使う場合は jsx="true" が必要 */}
      <style jsx="true">
        {`
          .container {
            border: solid 2px #f84f27;
            padding: 10px;
            border-radius: 10px;
            margin: 20px auto;
          }

          .title {
            color: #ebb2f2;
          }

          .button {
            padding: 10px;
            color: #ff2b2f;
            border: 3px solid #aab2f4;
            border-radius: 5px;
          }
        `}
      </style>
    </>
  );
};
