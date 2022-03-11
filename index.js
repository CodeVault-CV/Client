import express from "express";
import path from "path";

const app = express();
const port = 5500;
const __dirname = path.resolve();

app.use(express.static(__dirname + '/src'));
// 브라우저 새로고침을 위한 처리 (다른 route가 존재하는 경우 맨 아래에 위치해야 한다)
// 브라우저 새로고침 시 서버는 index.html을 전달하고 클라이언트는 window.location.pathname를 참조해 다시 라우팅한다.
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});