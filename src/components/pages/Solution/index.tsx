import { Navigate, useParams } from "react-router-dom";
import SolutionViewer from "./SolutionViewer";

const code = `def solution(n):
    answer = []
    # n이 0이 될 때까지 반복
    while n:
        # 3으로 나눈 나머지를 answer 리스트에 추가 (나머지가 0이면 4 추가)
        r = n % 3
        if r == 0: r = 4
        answer.append(str(r))
        # n-1을 3으로 나눈 몫을 n에 저장 (3진법이기 때문에 n-1을 나눠줘야 함)
        n = (n-1) // 3
    return ''.join(answer[::-1])    # 리스트를 반대로 문자열 변환하여 반환`;

const readMe =`# [12899] 124 나라의 숫자 - Python

## 🔍 Algorithm
**-**  

## 💻 Logic

\`\`\`Python
    # n이 0이 될 때까지 반복
    while n:
        # 3으로 나눈 나머지를 answer 리스트에 추가 (나머지가 0이면 4 추가)
        r = n % 3
        if r == 0: r = 4
        answer.append(str(r))
        # n-1을 3으로 나눈 몫을 n에 저장 (3진법이기 때문에 n-1을 나눠줘야 함)
        n = (n-1) // 3
\`\`\`
- **3으로 나눈 나머지를 \`answer\` 리스트에 추가**  
    나머지가 **0**이면 **4** 추가  
    나머지가 **1**, **2**면 **1**, **2** 그대로 추가  
- **\`n-1\`을 3으로 나눈 몫을 \`n\`에 저장**  
    3진법이기 때문에 \`n-1\`을 나눠줘야 함  


## 📝 Review

기존 진법 구하는 방식대로 구현하고, 마지막에 리스트에 있는 값들을 거꾸로 문자열로 변환해서 반환하면 되는 간단한 문제였다!`;

export default function SolutionContainer() {
  const { solutionId } = useParams();
  if (solutionId === undefined) {
    return <Navigate to="/notfound" replace={true} />;
  }

  return <SolutionViewer code={code} language={"python"} readMe={readMe} />;
}
