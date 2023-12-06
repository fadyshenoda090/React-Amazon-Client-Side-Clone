import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebasse'


export const userData = (setData, setLoading) => {
    setLoading(true);
    const getUsers = [];

    const subscriber = onSnapshot(collection(db, 'users'), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const usersData = {
                
              uid: doc.data().uid,
                createdAt: doc.data().createdAt,
                image: doc.data().image,
                displayName: doc.data().displayName,
                updatedAt: doc.data().updatedAt,
                email: doc.data().email,
                cart: doc.data().cart,
                


            };
console.log(usersData)
            getUsers.push(usersData);
        });
        setData(getUsers);
        setLoading(false);
    });

    return () => subscriber();
};

