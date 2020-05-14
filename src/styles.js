import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #ccc;
`;
export const Title = styled.Text`
    color: #262626;
    font-size: 25px;
    font-weight: bold;
    margin: 15px;
`;
export const Game = styled.View`
    height: 270px;
`;
export const Option = styled.TouchableOpacity`
    height: 80px;
    width: 80px;
    margin: 5px;
    border-radius: 8px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;
export const OptionText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #00000066;
`;
export const Footer = styled.View`
    align-items: center;
    justify-content: center;
`;

export const WinText = styled.Text`
    color: #262626;
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
`;

export const Winner = styled.Text`
    color: #000;
`;

export const Button = styled.TouchableOpacity`
    height: 50px;
    background: #4caf50;
    align-items: center;
    padding: 15px;
    justify-content: center;
    border-radius: 8px;
`;

export const ButtonText = styled.Text`
    color: #fff
`;