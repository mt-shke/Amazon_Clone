import { useEffect, useState } from "react";
import { getUserFirestoreData } from "../firebase/usersCollection";

const useUserData = (userUid) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (!userData) {
            update();
        }
    }, [userData, setUserData]);

    const update = async () => {
        const fetchedData = await getUserFirestoreData(userUid);
        if (fetchedData) {
            setUserData((p) => ({ ...fetchedData }));
        }
    };

    return { userData, setUserData, update };
};

export default useUserData;
