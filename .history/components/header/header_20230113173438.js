import style from '../../styles/Home.module.css';
import styled from "styled-components";
import { FlexBox, HeaderText, SmallHeaderText } from '../../styles/global';


export default function Header(){

    return(
        <FlexBox width="100vw" height="200px" bgColor="black">
            <FlexBox>
                <FlexBox><HeaderText>Expo Line</HeaderText></FlexBox>
                <FlexBox><SmallHeaderText>by Renata Dzotova</SmallHeaderText></FlexBox>
            </FlexBox>
        </FlexBox>
    )
}
