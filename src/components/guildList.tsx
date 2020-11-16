import React from 'react';
import {useAllGuildsQuery} from "../graphql/generatedtypes";


interface GuildListProps {

}


const GuildList: React.FC<GuildListProps> = ({}) => {
    const {data, loading, error} = useAllGuildsQuery({

    })

    return (
        <>

        </>
    )
}