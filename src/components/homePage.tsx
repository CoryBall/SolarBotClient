import React from 'react';
import {useSession} from "next-auth/client";


interface HomePageProps {

}


const HomePage: React.FC<HomePageProps> = ({}) => {
    const [session] = useSession();

    return (
        <>
            <div className={"h-100 v-100"}>

            </div>
        </>
    )
}


export default HomePage;