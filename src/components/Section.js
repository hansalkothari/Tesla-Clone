import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


export default function Section({ title,
    desc,
    backgroundImg,
    leftBtnTxt,
    rightBtnTxt })
{
 
    return (
        <Wrap bgImage = {backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </ItemText>
            </Fade>

            
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                        {leftBtnTxt}
                        </LeftButton>
                        {
                            rightBtnTxt && <RightButton>
                                                {rightBtnTxt}
                                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>

        </Wrap>
    );
}

const Wrap = styled.div`
    
    width:100%;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image:${props => `url("/images/${props.bgImage}")`};
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
    z-index:-1;
`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media(max-width:768px){
        flex-direction:column;
    }

`
const LeftButton = styled.div`
    background: black;
    opacity:0.8;
    color:white;
    height:40px;
    width:256px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    margin:8px;
`

const RightButton = styled(LeftButton)`
    background:white;
    opacity:0.65;
    color:black;
`
const DownArrow = styled.img`
    
    
    height:40px;
    overflow-x:hidden;
    animation:animationDown infinite 1.5s;
    
    

`

const Buttons = styled.div`
   
`