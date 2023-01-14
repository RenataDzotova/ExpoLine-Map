import style from '../../styles/Home.module.css';
import styled from "styled-components";
import { FlexBox, HeaderText, SmallHeaderText, Text } from '../../styles/global';


export default function Header(){

    return(
        <FlexBox width="100vw" height="fit-content" bgColor="#eae3d9" padding="20%" margin="0 0 20px 0" justifyContent="flex-start">
            <FlexBox alignItems="end" justifyContent="space-around">
                <Text fontSize="50px" color="rgb(25, 50, 108)" fontWeight="bold" margin="0 10px 0 0">Expo Line</Text>
                <Text fontSize="25px" margin="0 0 7px 0" color="rgb(107, 121, 154)" fontWeight="bold">route made with Next.js / React Leaflet</Text>
            </FlexBox>
        </FlexBox>
    )
}
