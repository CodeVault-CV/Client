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
  const cache = new Map<string, boolean>();

  return function (studyId: string | undefined, setIsLeader: any) {
    if (!studyId) {
      return false;
    }

    if (cache.has(studyId)) {
      return cache.get(studyId);
    }

    Study.checkStudyLeader(studyId).then((data) => {     
      cache.set(studyId, data);
      setIsLeader(data);
    });
  };
})();
