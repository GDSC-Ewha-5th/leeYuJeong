import React from "react";

const SearchBar = ({ getUser }) => { // getUser 함수 전달
    const [userName, setUserName] = useState(""); // input창의 value를 저장할 state 선언 

    const handleChange = (event) => { // input창의 value가 변할 때 실행되는 함수
      setUserName(event.target.value); // event.target.value === input창에 사용자가 작성한 텍스트
    };
  
    const handleSubmit = (event) => { // form을 제출할 때 실행되는 함수
      event.preventDefault(); // 기본 동작을 막는다
      getUser(userName); // input창의 value(사용자가 입력한 값)을 getUser에 전달한다
      setUserName(""); // input창의 value를 초기화한다
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="GitHub ID를 입력하세요"
          value={userName}
          onChange={handleChange}
        />
      </form>
    );
  };

export default SearchBar;

