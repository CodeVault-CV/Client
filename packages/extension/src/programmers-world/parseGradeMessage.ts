const getMessageType = (message: any) => {
  if (message?.command) return "start";
  if (message?.message) {
    const { type } = message.message;
    if (type === "testcase") return "score";
    if (type === "result_lesson_challenge") return "result";
  }
  return "irrelevant";
}

const messageRegex = /\d+\.?\d+/g;

const parseData = (json: any, messageType: ReturnType<typeof getMessageType>) => {
  if (messageType === "start") {
    const identifier = JSON.parse(json.identifier);
    const { lesson_id: problemId, language } = identifier;

    const codes = JSON.parse(json.data);
    const key = Object.keys(codes)[0];

    const code = codes[key];

    return {
      platform: "programmers",
      problemId: problemId.toString(),
      code,
      language,
    }
  }

  if (messageType === "score") {
    const { passed, msg } = json.message;
    if (passed) {
      const [timeMatch, memoryMatch] = msg.matchAll(messageRegex);

      return {
        time: parseFloat(timeMatch[0]),
        memory: parseFloat(memoryMatch[0])
      }
    }

    return {
      time: 0,
      memory: 0
    }
  }

  if (messageType === "result") {
    // passed 값을 전달한다.
    const { passed } = json.message;
    return {
      passed
    }
  }
}

export {
  getMessageType,
  parseData
}