import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebasse'


export const getCategoriesData = (setData, setLoading) => {
    setLoading(true);
    const getCategories = [];

    const subscriber = onSnapshot(collection(db, 'categories'), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const categoryData = {
                _id: doc.id,
                createdAt: doc.data().createdAt,
                image: doc.data().image,
                name: doc.data().name,
                slug: doc.data().slug,
                updatedAt: doc.data().updatedAt
            };

            getCategories.push(categoryData);
        });
        setData(getCategories);
        setLoading(false);
    });

    return () => subscriber();
};
