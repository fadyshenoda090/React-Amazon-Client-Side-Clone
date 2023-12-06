import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { db } from './firebasse'

export const getSearchData = (searchQuery, setData, setLoading) => {
    setLoading(true);
    const getSearchResults = [];

    const q = query(
        collection(db, 'products'),
        where('title', '>=', searchQuery.toLowerCase()),
        where('title', '<=', searchQuery.toLowerCase() + '\uf8ff'),
        orderBy('title')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const productData = {
                _id: doc.id,
                brand: {
                    _id: doc.data().brand._id,
                    name: doc.data().brand.name,
                    image: doc.data().brand.image,
                    slug: doc.data().brand.slug,
                },
                category: {
                    _id: doc.data().category._id,
                    name: doc.data().category.name,
                    image: doc.data().category.image,
                    slug: doc.data().category.slug,
                },
                createdAt: doc.data().createdAt,
                description: doc.data().description,
                id: doc.data().id,
                imageCover: doc.data().imageCover,
                images: doc.data().images,
                price: doc.data().price,
                priceAfterDiscount: doc.data().priceAfterDiscount,
                quantity: doc.data().quantity,
                ratingsAverage: doc.data().ratingsAverage,
                ratingsQuantity: doc.data().ratingsQuantity,
                slug: doc.data().slug,
                sold: doc.data().sold,
                subcategory: doc.data().subcategory,
                title: doc.data().title,
                updatedAt: doc.data().updatedAt
            };
            getSearchResults.push(productData);
        });
        setData(getSearchResults);
        setLoading(false);
    });

    return unsubscribe;
};
