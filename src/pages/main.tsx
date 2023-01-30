import { Button, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Main = (props: any) => {
    return (
        <>
          <Heading>4 hour timer</Heading>
          <Text>
            가장 이상적인 노동 시간은 하루 최대 4시간입니다.
          </Text>
          <Link to="/timer/">
            <Button color="black" margin="10px">Start</Button>
          </Link>
        </>
    )
}

export default Main;