import { useEffect, useState } from 'react';

import Navbar from './Navbar';
import { useAuth } from '../../../hoc/AuthContext';
import { getStudyList } from '../../../api';

export interface IStudy {
  studyId: string;
  name: string;
  leaderId: string;
  repositoryName: string;
  repositoryUrl: string;
}

export default function NavbarContainer() {
  const { auth, token, logout } = useAuth();
  const [studies, setStudies] = useState<IStudy[]>([]);

  useEffect(() => {
    const requestStudyList = async () => {
      const response = await getStudyList(token);
      setStudies(response.data);
    };

    token && requestStudyList();
  }, [token]);

  return <Navbar auth={auth} logout={logout} studies={studies} />;
}
