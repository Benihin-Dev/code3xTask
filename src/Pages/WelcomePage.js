import React, { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

export default function WelcomePage({ userEmailAddress, setUserEmailAddress }) {
  const [user, setUser] = useState(null);
  const [accessTokan, setAccessTokan] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // Get the ID token (access token)
        const token = await currentUser.getIdToken();
        setAccessTokan(token);
      } else if (userEmailAddress) {
        setUser({ email: userEmailAddress });
      } else {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate, userEmailAddress]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUserEmailAddress(null);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className=" w-full mt-10 md:mt-20 overflow-hidden relative md:px-10 ">
        <div className="  mx-auto">
          <h1 className=" text-2xl md:text-6xl font-thin scale-y-110 text-center ">
            Welcome aboard!🎉
          </h1>
          <h3 className="pt-0 w-10/12 mx-auto text-sm text-gray-500">
            Everything you need to begin your journey is right here.
          </h3>
        </div>
        <div className=" w-full md:max-w-4xl  mx-auto p-3  md:p-8">
          <div className="space-y-6">
            <div className="border-b 4">
              <div className=" gap-2 mb-4">
                <div>
                  {userEmailAddress ? (
                    <p className="text-gray-600">{userEmailAddress}</p>
                  ) : (
                    <div>
                      <p className="text-lg font-medium">{user.displayName}</p>
                      <p className="text-gray-600">{user.email}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {accessTokan && (
              <div>
                <h2 className="text-xl text-green-500 mb-2">Access Token</h2>
                <div className="bg-gray-100 p-4 rounded-lg break-all">
                  <code className="text-sm leading-5 text-gray-700">
                    {accessTokan}
                  </code>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center w-full items-center mb-8">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
