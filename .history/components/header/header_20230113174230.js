import style from '../../styles/Home.module.css';
import styled from "styled-components";
import { FlexBox, HeaderText, SmallHeaderText, Text } from '../../styles/global';


export default function Header(){

    return(
        <FlexBox width="100vw" height="fit-content" bgColor="#eae3d9" padding="20px">
            <FlexBox>
                <Text fontSize="50px" >Expo Line</Text>
                {/* <FlexBox><HeaderText>Expo Line</HeaderText></FlexBox> */}
                {/* <FlexBox><SmallHeaderText>by Renata Dzotova</SmallHeaderText></FlexBox> */}
            </FlexBox>
        </FlexBox>
    )
}
