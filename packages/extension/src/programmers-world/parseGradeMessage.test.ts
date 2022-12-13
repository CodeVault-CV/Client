import { getMessageType, parseData } from "./parseGradeMessage";

const start = {
  "command": "message",
  "identifier": "{\"channel\":\"Challenge::AlgorithmChannel\",\"challengeable_type\":\"algorithm\",\"challengeable_id\":9097,\"language\":\"javascript\",\"lesson_id\":92343}",
  "data": "{\"codes\":{\"33121\":\"function solution(info, edges) {\\n    const adj_list = Array.from(Array(info.length), () => []);\\n    edges.forEach(([from, to]) => {\\n        adj_list[from].push(to);\\n        adj_list[to].push(from);\\n    });\\n    \\n    const max_counts = Array.from(Array(info.length), () => [0, 0]);\\n    \\n    const getNextCounts = (next, sheep, wolf, visited) => {\\n        const next_counts = [sheep, wolf];\\n        if((visited & (1 << next)) === 0) next_counts[info[next]]++;\\n        return next_counts;\\n    }\\n    \\n    const canGo = (next, counts, visited) => {\\n        if(counts[0] <= counts[1]) return false;\\n        \\n        if(visited & (1 << next)) {\\n            if(counts[0] < max_counts[next][0]) return false;\\n            if(counts[0] === max_counts[next][0] && counts[1] >= max_counts[next][1]) return false;\\n        }\\n        \\n        return true;\\n    }\\n    \\n    const q = [[0, 1, 0, 1]];\\n    while(q.length) {\\n        const [cur, sheep, wolf, visited] = q.shift();\\n        if(sheep < max_counts[cur][0]) continue;\\n        \\n        adj_list[cur].forEach(next => {\\n            const next_counts = getNextCounts(next, sheep, wolf, visited);\\n            if(!canGo(next, next_counts, visited)) return;\\n            \\n            q.push([next, ...next_counts, visited | (1 << next)]);\\n            max_counts[next] = next_counts;\\n        });\\n    }\\n    \\n    return max_counts.reduce((prev, cur) => Math.max(prev, cur[0]), 2);\\n}\"},\"action\":\"submit\"}"
}

const score_pass = {
  "identifier": "{\"channel\":\"Challenge::AlgorithmChannel\",\"challengeable_type\":\"algorithm\",\"challengeable_id\":9097,\"language\":\"javascript\",\"lesson_id\":92343}",
  "message": {
    "action": "submit",
    "type": "testcase",
    "testcaseId": 106850,
    "testcasesCount": 18,
    "passed": true,
    "msg": "통과 (0.61ms, 33.6MB)"
  }
}

const score_fail = {
  "identifier": "{\"channel\":\"Challenge::AlgorithmChannel\",\"challengeable_type\":\"algorithm\",\"challengeable_id\":9097,\"language\":\"javascript\",\"lesson_id\":92343}",
  "message": {
    "action": "submit",
    "type": "testcase",
    "testcaseId": 106850,
    "testcasesCount": 18,
    "passed": false,
    "msg": "통과 (0.61ms, 33.6MB)"
  }
}

const result = {
  "identifier": "{\"channel\":\"Challenge::AlgorithmChannel\",\"challengeable_type\":\"algorithm\",\"challengeable_id\":9097,\"language\":\"javascript\",\"lesson_id\":92343}",
  "message": {
    "action": "submit",
    "type": "result_lesson_challenge",
    "passed": false,
    "scores": [
      {
        "name": "정확성",
        "score": "94.4"
      }
    ],
    "userScore": "94.4",
    "perfectScore": "100.0",
    "challengeableId": 9097,
    "language": "javascript",
    "isNewRating": false,
    "finishModalBtnText": "다른 사람의 풀이 보기",
    "finishModalLink": "/learn/courses/30/lessons/92343/solution_groups?language=javascript",
    "oldUserRating": 1609,
    "newUserRating": 1609
  }
}

const finish = {
  "identifier": "{\"channel\":\"Challenge::AlgorithmChannel\",\"challengeable_type\":\"algorithm\",\"challengeable_id\":9097,\"language\":\"javascript\",\"lesson_id\":92343}",
  "message": {
    "action": "submit",
    "type": "finish"
  }
}


describe("프로그래머스 채점 메시지 타입 (getMessageType)", () => {
  it("code가 담긴 메시지는 start 타입이다.", () => {
    const type = getMessageType(start);
    expect(type).toBe("start");
  });

  it("testcase의 채점 정보가 담긴 메시지는 score 타입이다.", () => {
    const type = getMessageType(score_pass);
    expect(type).toBe("score");
  });

  it("testcase의 채점 정보가 담긴 메시지는 fail이여도 score 타입이다.", () => {
    const type = getMessageType(score_fail);
    expect(type).toBe("score");
  });

  it("채점 결과가 담긴 메시지는 result 타입이다.", () => {
    const type = getMessageType(result);
    expect(type).toBe("result");
  })

  it("이외의 메시지들은 모두 irrelevant 타입이다.", () => {
    const emptyType = getMessageType({});
    const finishType = getMessageType(finish);

    expect(emptyType).toBe("irrelevant");
    expect(finishType).toBe("irrelevant");
  })
});

describe("프로그래머스 채점 메시지 데이터 추출 (parseData)", () => {
  it("start 타입의 메시지면 platform, problemId, code, language 정보를 추출한다.", () => {
    const data = parseData(start, "start");
    
    expect(data).toHaveProperty("platform", "programmers");
    expect(data).toHaveProperty("problemId", "92343");
    expect(data).toHaveProperty("code");
    expect(data).toHaveProperty("language", "javascript");
  });

  it("score 타입의 메시지면 memory, time 정보를 추출한다.", () => {
    const data = parseData(score_pass , "score");

    expect(data?.time).toBeCloseTo(0.61);
    expect(data?.memory).toBeCloseTo(33.6);
  });

  it("score 타입의 메시지이지만 passed의 값이 fail이면 memory, time이 0으로 온다.", () => {
    const data = parseData(score_fail , "score");

    expect(data?.time).toBeCloseTo(0);
    expect(data?.memory).toBeCloseTo(0);
  });

  it("result 타입의 메시지면 성공 여부(passed)를 추출한다.", () => {
    const data = parseData(result , "result");

    expect(data).toHaveProperty("passed", false);
  });
});