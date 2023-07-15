import { useEffect, useState } from "react";
import { useAppSelector } from '../redux/hooks';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = useAppSelector((state) => state.login.admin)

  useEffect(() => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://test.yuyana.com/${url}`, config);
        const json = await res.json();
        setData(json.data);
        setLoading(false);
      } catch (error) {
          setError(error);
          setLoading(false);
      }
    };

    fetchData();

  }, [url]);

  return { data, error, loading };
};

export default useFetch;