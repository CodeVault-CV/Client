import { useContext, useEffect, useState } from 'react';

import Navbar from './Navbar';
import { AuthContext } from '../../hoc/AuthContext';
import { getStudyList } from '../../api';

export interface IStudy {
  studyId: string;
  name: string;
  leaderId: string;
  repositoryName: string;
  repositoryUrl: string;
}

export default function NavbarContainer() {
  const { auth, token, logout } = useContext(AuthContext);
  const [studys, setStudys] = useState<IStudy[]>([]);

  useEffect(() => {
    const requestStudyList = async () => {
      const response = await getStudyList(token);
      setStudys(response.data);
    };

    token && requestStudyList();
  }, [token]);

  return <Navbar auth={auth} logout={logout} studys={studys} />;
}
