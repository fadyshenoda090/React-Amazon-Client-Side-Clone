import { collection, onSnapshot, query, getDocs } from 'firebase/firestore';
import { db } from './firebasse'

export const getUserAddressData = async (userId, setData, setLoading) => {
    setLoading(true);

    try {
        const userAddressQuery = query(
            collection(db, 'users', userId, 'details')
        );

        const addressSnapshot = await getDocs(userAddressQuery);

        const addressData = addressSnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));

        setData(addressData);
    } catch (error) {
        console.error('Error fetching user address data:', error);
    } finally {
        setLoading(false);
    }
};
