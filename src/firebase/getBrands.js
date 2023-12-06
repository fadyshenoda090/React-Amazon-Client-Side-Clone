import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebasse'


export const getBrandsData = (setData, setLoading) => {
    setLoading(true);
    const getBrands = [];

    const subscriber = onSnapshot(collection(db, 'brands'), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const brandData = {
                _id: doc.id,
                createdAt: doc.data().createdAt,
                image: doc.data().image,
                name: doc.data().name,
                slug: doc.data().slug,
                updatedAt: doc.data().updatedAt
            };

            getBrands.push(brandData);
        });
        setData(getBrands);
        setLoading(false);
    });

    return () => subscriber();
};
