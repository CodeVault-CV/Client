import Solution from '.';
import { iSolutionParams } from './interface';

const solutionParams: iSolutionParams = {
  language: 'javascript',
  code: 'solution(){}',
  memory: 1.3,
  time: 0.5,
  readMe: '',
  date: new Date(),
};

describe('Solution', () => {
  const solution = new Solution(solutionParams);

  it('프로그래밍 언어를 가진다.', () => {
    expect(solution.language).toBe(solutionParams.language);
  });

  it('코드를 가진다.', () => {
    expect(solution.code).toBe(solutionParams.code);
  });

  it('사용한 메모리를 가진다.', () => {
    expect(solution.memory).toBeCloseTo(solutionParams.memory);
  });

  it('소요된 시간을 가진다.', () => {
    expect(solution.time).toBeCloseTo(solutionParams.time);
  });

  it('풀이를 가진다.', () => {
    expect(solution.readMe).toBe(solutionParams.readMe);
  });

  it('푼 날짜를 가진다.', () => {
    expect(solution.date).toBe(solutionParams.date);
  });
});
