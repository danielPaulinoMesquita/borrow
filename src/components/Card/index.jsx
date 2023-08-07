import React from 'react';
import {Heading, HStack, Image, Text} from "@chakra-ui/react";
import {Card} from "./styles";
import ConstructImage from '../../assets/screens/construct-example-company.jpg'

const ComponentCard = ({objects, loading}) => {
    if(loading) {
        return <h2>Loading ...</h2>
    }

    return (
        <div>
            <HStack spacing={8}>
                {objects?.map((object) => {
                    return (
                        <Card key={object.id}>
                                <Image
                                    boxSize='100%'
                                    borderRadius='base'
                                    objectFit='cover'
                                    src={ConstructImage}
                                    alt='image'
                                />

                                <Heading fontSize='sm'>{object.title}</Heading>
                                <Text>{object.desc}</Text>
                        </Card>
                    )
                })}
            </HStack>
        </div>
    )

}

export default ComponentCard;