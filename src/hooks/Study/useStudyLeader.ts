import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Study from '../../di/Study';

export default function useStudyLeader(): boolean {
  const [isLeader, setIsLeader] = useState<boolean>(false);
  const studyId: string | undefined = useParams().studyId;
  const cached = helper(studyId, setIsLeader);

  return cached !== undefined ? cached : isLeader;
}

const helper = (function () {
  let cache: [string, boolean] = ['', false];

  return function (studyId: string | undefined, setIsLeader: any) {
    if (!studyId || cache[0] === studyId) {
      return cache[1];
    }

    Study.checkStudyLeader(studyId).then((data) => {
      cache = [studyId, data];
      setIsLeader(data);
    });
  };
})();
