import { useEffect, useState } from 'react';

import Navbar from './Navbar';
import { useAuth } from '../../../hoc/AuthContext';
import { getStudyList } from '../../../api';

export interface IStudy {
  id: string;
  name: string;
}

export default function NavbarContainer() {
  const { auth, logout } = useAuth();
  const [studies, setStudies] = useState<IStudy[]>([]);

  useEffect(() => {
    const requestStudyList = async () => {
      const response = await getStudyList();
      setStudies(response.data);
    };

    auth && requestStudyList();
  }, [auth]);

  return <Navbar auth={auth} logout={logout} studies={studies} />;
}
