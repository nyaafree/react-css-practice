export const InlineStyle = () => {
  // jsxでスタイルをあてるときは下記のようにオブジェクト形式でキーをキャメルケースで書く
  // これをstyleに渡せばCSSが適用される
  const ContainerStyle = {
    border: "solid 2px #f84f27",
    padding: "10px",
    borderRadius: "10px",
    margin: "20px auto"
  };
  const ParagraphStyle = {
    color: "#ebb2f2"
  };
  const ButtonStyle = {
    padding: "10px",
    color: "#ff2b2f",
    border: "3px solid #aab2f4",
    borderRadius: "5px"
  };
  return (
    <div style={ContainerStyle}>
      <p style={ParagraphStyle}>-- InlineStyle --</p>
      <button style={ButtonStyle}>CSS PRACTICE!!!</button>
    </div>
  );
};
