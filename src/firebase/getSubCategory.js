import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebasse'


export const getSubCategories = (setData, setLoading) => {
    setLoading(true);
    const getSubCategories = [];

    const subscriber = onSnapshot(collection(db, 'sub-categories'), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const SubCategoriesData = {

                _id: doc.id,
                createdAt: doc.data().createdAt,
                image: doc.data().image,
                name: doc.data().name,
                slug: doc.data().slug,
                updatedAt: doc.data().updatedAt   
          
            };

            getSubCategories.push(SubCategoriesData);
        });
        setData(getSubCategories);
        setLoading(false);
    });

    return () => subscriber();
};
