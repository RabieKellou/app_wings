import React, { Suspense, useEffect, useState } from "react";
import Loading from "./components/ui/Loading.js";
import { AuthContext } from "./contexts/authContext";
import { getAuth } from "./utils/getAuth";

const Pages = React.lazy(() => import("./pages"));
function App() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    if (auth) setAuth(auth);
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Suspense fallback={<Loading />}>
        <Pages />
      </Suspense>
    </AuthContext.Provider>
  );
}

export default App;
