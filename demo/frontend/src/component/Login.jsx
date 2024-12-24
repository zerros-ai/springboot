import React, { useState } from "react";

function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({id,password}),
            });
            if(response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token);
                alert("로그인 성공");
                window.location.href = "/dashboard";
            }else {
                const errorData = await response.json();
                setErrorMessage(errorDAta.message||"로그인 실패!");
            }
        }catch (error) {
            setErrorMessage("서버와 연결할 수 없습니다.")
        }
    };

    return (
        <div style={{maxWidth: "400px", margin: "50px auto", textAlign: "center"}}>
            <h1>로그인</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <input
                        type="text"
                        placeholder="사용자 이름"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                        style={{width: "100%", padding: "10px", marginBottom: "10px"}}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{width: "100%", padding: "10px", marginBottom: "20px"}}
                    />
                </div>
                <button type="submit" style={{padding: "10px 20px", width: "100%"}}>
                    로그인
                </button>
            </form>
            {errorMessage && (
                <p style={{color: "red", marginTop: "20px"}}>{errorMessage}</p>
            )}
        </div>
    );
}

export default Login;