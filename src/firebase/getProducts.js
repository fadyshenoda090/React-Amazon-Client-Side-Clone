import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebasse'

export const getProductsData = (setData, setLoading) => {
    setLoading(true);
    const getProducts = [];

    const subscriber = onSnapshot(collection(db, 'products'), (querySnapshot) => {
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

            getProducts.push(productData);
        });
        setData(getProducts);
        setLoading(false);
    });

    return () => subscriber();
};
