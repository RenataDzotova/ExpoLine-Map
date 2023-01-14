import style from '../../styles/Home.module.css';
import styled from "styled-components";
import { FlexBox, HeaderText, SmallHeaderText, Text } from '../../styles/global';


export default function Header(){

    return(
        <FlexBox width="100vw" height="fit-content" bgColor="#eae3d9" padding="20px" margin="0 0 20px 0">
            <FlexBox>
                <Text fontSize="50px" color="pink;" >Expo Line</Text>
                <Text fontSize="27px" >by Renata Dzotova</Text>
            </FlexBox>
        </FlexBox>
    )
}
