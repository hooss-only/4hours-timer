import { Heading, Text, Button } from "@chakra-ui/react"
import { useState, useEffect } from "react"


const Timer = (props: any) => {

    const FOUR_HOURS = 14400;
    const advices = [
        "하루에 4시간, 일주일에 28시간, 한 달에 112시간.",
        "할 수 있어요.",
        "불가능은 없어요.",
        "노력은 당신의 꿈을 이루게 해줄거예요.",
        "한 번 해보자고요!",
        "일 년에 1460시간.",
        "조금만 더 버티면 돼요!",
        "집중!",
        "=(^모^)=",
        "파이팅!",
    ]
    const dones = [
        "끝!",
        "GG",
        "해낼거라 믿었어요.",
        "앞으로도 잘 해보자고요!",
    ]

    const choiceRandom = (array: Array<any>) => {
        return array[Math.floor(Math.random() * array.length)];
    }

    const [leftTime, setLeftTime] = useState(FOUR_HOURS);
    const [advice, setAdvice] = useState(choiceRandom(advices));
    const [done, setDone] = useState(false);
    const [turn, setTurn] = useState("turn off");

    const flip = () => {
        if (turn === "turn off") {
            setTurn("turn on");
        } else {
            setTurn("turn off");
        }
    }

    useEffect(() => {
        console.log(leftTime)
        const interval = setInterval(() => {
            if (turn === "turn on") return;
            if (leftTime > 0) {
                setLeftTime(leftTime - 1);

                if (leftTime % 6 === 0) {
                    setAdvice(choiceRandom(advices));
                }
            } else {
                if (!done) {
                    setAdvice(choiceRandom(dones));
                    setDone(true);
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    });

    return (
        <>
            <Heading margin="15px">{ new Date(leftTime * 1000).toISOString().slice(11, 19) }</Heading>
            <Text>{ advice }</Text>
            <Button margin="15px" color="black" onClick={flip}>{ turn }</Button>
        </>
    );
}

export default Timer;