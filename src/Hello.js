import React from "react";

function Hello({ color, name, isSpecial }) {
  return (
    <div
      style={{
        color,
      }}
    >
      {isSpecial ? <b>*</b> : null}
      {/*isSpecial && <b>*</b>*/}
      안녕하세요 {name}
    </div>
  );
}
// #1. props 값이 없을때 기본값을 설정할수있음
Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
