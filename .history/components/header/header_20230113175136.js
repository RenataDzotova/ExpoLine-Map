import style from '../../styles/Home.module.css';
import styled from "styled-components";
import { FlexBox, HeaderText, SmallHeaderText, Text } from '../../styles/global';


export default function Header(){

    return(
        <FlexBox width="100vw" height="fit-content" bgColor="#eae3d9" padding="20px" margin="0 0 20px 0">
            <FlexBox alignItems="end" width="300px">
                <Text fontSize="50px" color="rgb(25, 50, 108)" fontWeight="bold">Expo Line</Text>
                <Text fontSize="25px" margin="0 0 7px 0">by Renata Dzotova</Text>
            </FlexBox>
        </FlexBox>
    )
}
