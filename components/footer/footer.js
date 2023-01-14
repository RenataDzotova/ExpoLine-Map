import style from '../../styles/Home.module.css';
import styled from "styled-components";
import { FlexBox, HeaderText, SmallHeaderText, Text } from '../../styles/global';


export default function Footer(){

    return(
        <FlexBox width="100vw" height="60px" bgColor="rgb(55, 55, 55)" padding="0 0 0 10%" margin="20px 0 0 0" justifyContent="flex-start" position="absolute" bottom="0px">
            <FlexBox alignItems="end" justifyContent="space-around">
                <Text fontSize="20px" color="rgb(186, 186, 186)" fontWeight="normal">© 2023 Renata Dzotova. All right reserved.</Text>
            </FlexBox>
        </FlexBox>
    )
}
