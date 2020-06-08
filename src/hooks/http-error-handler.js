import { useState, useEffect } from "react";

export default (useHttpClient) => {
  const [error, setError] = useState(null);

  const requestInterceptor = useHttpClient.interceptors.request.use((req) => {
    setError(null);
    return req;
  });
  const responseInterceptor = useHttpClient.interceptors.response.use(
    (res) => res,
    (error) => {
      setError(error);
    }
  );

  useEffect(() => {
    return () => {
      useHttpClient.interceptors.request.eject(requestInterceptor);
      useHttpClient.interceptors.response.eject(responseInterceptor);
    };
  }, [requestInterceptor, responseInterceptor]);

  const errorConfirmedHandler = () => {
    setError(null);
  };

  return [error, errorConfirmedHandler];
};
