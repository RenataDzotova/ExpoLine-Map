import style from '../../styles/Home.module.css';
import styled from "styled-components";
import { FlexBox, HeaderText, SmallHeaderText, Text } from '../../styles/global';


export default function Footer(){

    return(
        <FlexBox width="100vw" height="60px" bgColor="#eae3d9" padding="0 0 0 10%" margin="20px 0 0 0" justifyContent="flex-start" position="absolute" bottom="0px">
            <FlexBox alignItems="end" justifyContent="space-around">
                <Text fontSize="25px" color="rgb(107, 121, 154)" fontWeight="normal">2023 Renata Dzotova. All right reserved.</Text>
            </FlexBox>
        </FlexBox>
    )
}
