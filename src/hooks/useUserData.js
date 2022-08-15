import { useEffect, useState } from "react";
import { getUserFirestoreData } from "../firebase/usersCollection";

const useUserData = (user) => {
    const [userData, setUserData] = useState(user);

    useEffect(() => {
        if (!userData) {
            update();
        }
    }, []);

    const update = async () => {
        try {
            if (!user?.userUid) {
                return;
            }
            const fetchedData = await getUserFirestoreData(user.userUid);
            if (!fetchedData) {
                throw new Error("useUserData Error while updating");
            }
            setUserData((prev) => ({ ...prev, ...fetchedData }));
        } catch (error) {
            console.error(error);
        }
    };

    // const update = useCallback(async () => {
    //     try {
    //         if (!user) {
    //             return;
    //         }
    //         const fetchedData = await getUserFirestoreData(userData.userUid);
    //         if (!fetchedData) {
    //             throw new Error("useUserData Error while updating");
    //         }

    //         setUserData((prev) => ({ ...prev, ...fetchedData }));
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }, [userData]);

    return { userData, setUserData, update };
};

export default useUserData;
